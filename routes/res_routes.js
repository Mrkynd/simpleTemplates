var path = require('path')
var JSON = require('../testingfs')
var db = require('../db')
var model = require('../models/blog.js')

module.exports = {
  index: index,
  webapps: webapps,
  userId: userIdHandler,
  scripts: scripts,
  about: about,
  contact: contact,
  contactSubmit: contactSubmit,
  login: login,
  checkLogin: checkLogin,
  blog: blog
}

function index(req, res) {
  res.render('home', {
    title: 'Mini Project Segments',
    heroText: 'StudyBud',
    heroImage: '',
    obj3: {
      prop3: ['snoop','doggy', 'dog', 'is', 'at', 'the', 'door']
    }
  })
}

function blog(req, res) {
  // console.log({todos: model});
  // for (var i = 0; i < model.length; i++) {
  //   var x = model[i]
  // }
//   for (var key in model) {
//   if (model.hasOwnProperty(key)) {
//     console.log(key + " -> " + model[key]);
//   }
// }
  // console.log(model);
  res.render('blog', {blog: model})
}

function about(req, res) {
  var d = JSON.dummyJson
  // console.log(d);
  res.render('about', {dummy: d})
}

//contact submit
function contact(req, res) {
  res.render('contact', {mo: req.query})
}

function scripts(req, res) {
  res.render('js-scripts')
}

function contactSubmit(req, res) {
  console.log(req.body.firstName)
    res.render('success', {yo: req.body, img:'http://res.cloudinary.com/duj6n6g9f/image/upload/v1477548420/maxresdefault_mfeebu.jpg'})
}


//if admin
function login(req,res) {
  // var text = '{"greeting": "Hello","goodbyes": "Aroir voir","text": "Hey lookie here, it seems to work out just fine","message": "I guess your fears are now obselete"}'
  //
  // var obj = JSON.parse(text)
  // console.log(obj);
  res.render('login', {qs: req.query})
}

function checkLogin(req, res) {

  var iUsername = req.body.username
  var iPassword = req.body.password
  var users = {
    usernames: 'alexander'
  }

  var secret = {
    passwords: 'thegreat'
  }

  var errMsg = {
    err: "Sorry that wasn't correct please try again",
    usernameErr: "Wrong username",
    passwordErr: "Wrong password"
  }

  var bodyData = req.body

  if (iUsername === users.usernames && iPassword === secret.passwords) {
    res.render('login-success', {data: bodyData})
  } else {
    res.render('login', errMsg)
  }
}

function webapps(req, res) {
  res.send(req.query.q + ' is this what you searched for?')
}

function userIdHandler(req, res) {
  console.log(req.route)
  res.send('Gets a response')
}
