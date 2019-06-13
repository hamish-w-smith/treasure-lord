const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMember: getMember,
  getMembers: getMembers
}

function getMembers (db = connection) {
  return db('members').select()
}

function getMember (id, db = connection) {
  return db('users').where('id', id).first()
}
