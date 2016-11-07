var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')

var response = require('./routes/res_routes')
var request = require('./routes/req_routes')

var PORT = 3000
var app = express()

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public')) //WTD app.use('/', express.static('public'))

app.get('/', response.home)
app.get('/home', response.index) //simple sending html output to the browser
app.get('/webapps', response.webapps) //using req.query to insert data into doc
app.get('/user/:id?', response.userId) //a simple resonse using an id paramaeter

app.get('/add', request.add) //meant to add function & return via answer route
app.get('/answer', request.answer) //Allows us to save data to server memory

app.listen(PORT, function () {
  console.log("Listening for aliens on port ", PORT)
})
