var fs = require('fs');
var config = require('./testingfs.JSON')

// fs.unlink('something.json', (err) => {
//   if(err) throw err;
//   console.log('Succesfully deleted /students.json');
// })

fs.rmdir('testing', function (err) {
  if (err) {
    console.log('** sorry no directory was found');
  } else {
    console.log('testing directory deleted');
  }
})

fs.readFile('testingfs.json', function (err, data) {
  if (err) throw err;
  console.log(config.name);
})
