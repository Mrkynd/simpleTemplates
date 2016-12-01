// var knex = require('knex')
// var config  = require('./knexfile')
var development = require('./knexfile').development
var knex = require('knex')(development)
//
// module.exports = {
//   userHome: userHome,
//   createUser: createUser
// }


/* THE 'getConnection' FUNCTION BELOW REFERENCES THE KNEXFILE.JS
  { client: 'sqlite3',
  connection: { filename: './dev.sqlite3' },
  useNullAsDefault: true,
  debug: true }
*/

// function getConnection() {
//   console.log(config.development)
//   return knex(config.development)
// }

//this function gives our configeration for our mysql connection so we can start using it.

// function getUsers(req, res) {
//   var c = getConnection()
//   var displayUsers = c('users').select()
//   // console.log(displayUsers)
//   return displayUsers
// }
// getConnection()
