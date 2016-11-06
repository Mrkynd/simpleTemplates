var test = require('tape')
var tapSpec = require('tap-spec')

test.createStream()
  .pipe(tapSpec())
  .pipe(process.stdout)

test('Testing One Two Three', function (t) {
  t.true(2 + 2 == 4, 'Addition Complete')
  t.equal(3 * 3, 9, 'multiplication Complete')

  boo = ['dave', 'sharon']
  boo.push('flora')
  t.deepEqual(boo, ['dave', 'sharon', 'flora'], 'Array Complete')
  t.end()
})
