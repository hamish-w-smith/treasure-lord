exports.up = (knex, Promise) => {
  return knex.schema.createTable('events', (table) => {
    table.increments('id').primary()
    table.string('event_name')
    table.string('email')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
