const fs = require('fs');

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

fs.readFile('test.txt', function (err, data) {
  if (err) {
    return console.error(err)
  }
  console.log('Async Reading Test.txt', + data.toString());
})

var data = fs.readFile('test.txt');
console.log('Sync Read: ' + data.toString());

console.log("Program Ended");
