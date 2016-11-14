module.exports = {
  index: index,
  webapps: webapps,
  userId: userIdHandler,
  home: home
}

function index(req, res) {
  res.render('home', {
    title: 'Creating an app that uses GET and POST',
    firstName: 'John',
    lastName: 'Marston'
  })
}

function home(req, res) {
  res.send('HELLO')
}

function webapps(req, res) {
  res.send(req.query.q + ' is this what you searched for?')
}

function userIdHandler(req, res) {
  console.log(req.route)
  res.send('Gets a response')
}
