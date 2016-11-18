var path = require('path')

module.exports = {
  index: index,
  webapps: webapps,
  userId: userIdHandler,
  about: about,
  contact: contact,
  contactSubmit: contactSubmit,
  login: login,
  checkLogin: checkLogin

}

function index(req, res) {
  res.render('home', {
    title: 'Mini Project Segments',
    heroText: 'StudyBud',
    heroImage: 'http://res.cloudinary.com/duj6n6g9f/image/upload/v1477548420/maxresdefault_mfeebu.jpg',
    obj3: {
      prop3: ['snoop','doggy', 'dog', 'is', 'at', 'the', 'door']
    }
  })
}

function about(req, res) {
  res.render('about', {
    info: 'I am a human being that loves other human beings'
  })
}

//contact submit
function contact(req, res) {
  res.render('contact', {mo: req.query})
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

  console.log(req.body)

  var iUsername = req.body.username
  var iPassword = req.body.password

  var users = {
    usernames: 'alex'
  }

  var secret = {
    passwords: 'thegreat'
  }

  var errMsg = {
    err: "Sorry that wasn't correct please try again",
    usernameErr: "Wrong username",
    passwordErr: "Wrong password"
  }

  if (iUsername === users.usernames && iPassword === secret.passwords) {
    res.render('login-success', {data: req.body})
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
