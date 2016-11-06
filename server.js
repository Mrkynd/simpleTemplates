var express = require('express')

var response = require('./routes/res_routes')
var request = require('./routes/req_routes')

var app = express()
var PORT = 3000

app.get('/home', response.index ) //simple sending html output to the browser
app.get('/webapps', response.webapps) //using req.query to insert data into doc

// app.get('/user/:id?', function userIdHandler(req, res) {
//   console.log(req.route)
//   res.send('Gets a response')
// })

app.get('/add', request.add)
app.get('/answer', request.answer) //Allows us to save data to server memory

app.use('/', express.static('public'))

app.listen(PORT, function () {
  console.log("Listening for aliens on port ", PORT)
})
