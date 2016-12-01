var fs = require('fs');

// fs.unlink('./migrations/20161121123420_migration_name.js', (err) => {
//   if(err) throw err;
//   console.log('Succesfully deleted /students.json');
// })
// fs.mkdir('yay')
// fs.rmdir('migrations')
//
// fs.rmdir('testing', function (err) {
//   if (err) {
//     console.log('** sorry no directory was found');
//   } else {
//     console.log('testing directory deleted');
//   }
// })
//
// var readme = fs.readFileSync('readme.txt', 'utf8')
// console.log(readme);
//
// fs.readFile('readme.txt', 'utf8', function (err, data) {
//   if (err) {
//     console.log('sorry no can do')
//   }
//   fs.writeFile('writeme.txt', data)
// })

const contents = fs.readFileSync('dummy.json') //get contents from json file

const dummyJson = JSON.parse(contents) //define to json type...

// console.log('NAME: ', dummyJson[3])
// console.log('AGE: ', dummyJson.age)
// console.log('SEX: ', dummyJson.sex)
// console.log('LOCATION: ', dummyJson.location)

module.exports.dummyJson = dummyJson

// module.exports = {
//   dummyJson: dummyJson
// }
