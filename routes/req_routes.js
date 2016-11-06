module.exports = {
  add: add,
  answer: answer
}

function add(req, res) {
  req.app.locals.op1 = parseInt(req.query.op1)
  req.app.locals.op2 = parseInt(req.query.op2)
  res.send('Got it. <a href="/answer"> Is this your number?</a>')
}

function answer(req, res) {
  var result = req.app.locals.op1 + req.app.locals.op2;
  console.log(result);
  res.send('Take this answer and shove it in you wallet ' + result)
}
