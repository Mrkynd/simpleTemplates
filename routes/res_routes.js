module.exports = {
  index: index,
  webapps: webapps,
  userId: userIdHandler,
  about: about,
  contact: contact,
  ifadmin: ifAdmin,
  admin: admin
}

function index(req, res) {
  res.render('home', {
    title: 'Creating an app that uses GET and POST',
    firstName: 'John',
    lastName: 'Marston',
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

function contact(req, res) {
  res.render('contact', {
    phName: 'Please Enter Your Name',
    phEmail: 'example@gmail.com'
  })
}

function ifAdmin(req,res) {
  res.render('ifadmin', {
    userName: 'joe',
    passWord: 'blow',
    allow: false
  })
}

function admin(req, res) {
  res.render('admin', {
    changeUsername: '',
    changePassword: '',
    changeEmail: '',
    deleteAccount: false
  })
}

function webapps(req, res) {
  res.send(req.query.q + ' is this what you searched for?')
}

function userIdHandler(req, res) {
  console.log(req.route)
  res.send('Gets a response')
}
