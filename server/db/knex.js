const environment = process.env.NODE_ENV || 'development'

const config = require('../knexfile')[environment]

module.exports = require('knex')(config) // connect to db via knexfile.js module.exports = { development...db config process.env... }


