module.exports = {
  index: index,
  webapps: webapps,
}

function index(req, res) {
  res.send('HELLO')
}

function webapps(req, res) {
  res.send(req.query.q + ' is this what you searched for?')
}
