var express = require('express')
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')
var fs = require('fs')
var path = require('path')

var response = require('./routes/res_routes')
var request = require('./routes/req_routes')

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

app.get('/', response.index)
app.get('/about', response.about) //simple sending html output to the browser

app.get('/contact', response.contact)
app.post('/contact', urlencodedParser, response.contactSubmit)

app.get('/ifadmin', response.ifadmin)
app.post('/ifadmin', urlencodedParser, response.ifadminPosts)


// app.post('/admin', response.admin)
app.get('/webapps', response.webapps) //using req.query to insert data into doc
app.get('/user/:id?', response.userId) //a simple resonse using an id paramaeter

app.get('/add', request.add) //meant to add function & return via answer route
app.get('/answer', request.answer) //Allows us to save data to server memory

app.listen(port, function () {
  console.log("Listening for aliens on port ", port)
})
