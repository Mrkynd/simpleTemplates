var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var fs = require('fs')
var path = require('path')
var sqlite3 = require('sqlite3')
var multer = require('multer')
// var upload = multer({ dest: './public/uploads'})
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

var upload = multer({storage: storage})

// var knex = require('knex')({
//   client: 'sqlite3',
//   debug: true,
//   useNullAsDefault: true,
//   connection: {
//     filename: './db.sqlite'
//   }
// })

var response = require('./routes/res_routes')
var request = require('./routes/req_routes')
// var db = require('./db')

var port = process.env.PORT || 3000
var app = express()

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false})

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public')) //WTD app.use('/', express.static('public'))


app.get('/upload', function (req, res) {
    res.render('upload', {title: 'Uploading Images'})
})

app.post('/upload', upload.any(), function (req, res) {
  var imgFiles = req.files[0]
  // console.log(imgFiles.path);
  console.log(Object.keys(imgFiles));
  res.render('upload', {displayImg: imgFiles, title: 'Uploading Images'} )
})

// [ { fieldname: 'image',
//     originalname: '4edec4834ba4887c68c7cc1b11844a74.jpg',
//     encoding: '7bit',
//     mimetype: 'image/jpeg',
//     destination: './public/uploads',
//     filename: '3f4caf2917db4a516652a070ac01f6bc',
//     path: 'public/uploads/3f4caf2917db4a516652a070ac01f6bc',
//     size: 14257
//   } ]


// get and POSTS from the DB.js file

// app.get('/userHome', db.userHome)
// app.get('/createUser', db.createUser)

app.get('/', response.index)
app.get('/about', response.about) //simple sending html output to the browser

app.get('/blog', response.blog)

app.get('/contact', response.contact)
app.post('/contact', urlencodedParser, response.contactSubmit)

app.get('/js-scripts', response.scripts)

app.get('/login', response.login)
app.post('/login', urlencodedParser, response.checkLogin)

// app.post('/admin', response.admin)
app.get('/webapps', response.webapps) //using req.query to insert data into doc
app.get('/user/:id?', response.userId) //a simple resonse using an id paramaeter

app.get('/add', request.add) //meant to add function & return via answer route
app.get('/answer', request.answer) //Allows us to save data to server memory

app.listen(port, function () {
  console.log("Listening for aliens on port ", port)
})
