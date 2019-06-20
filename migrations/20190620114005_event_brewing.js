exports.up = (knex, Promise) => {
  return knex.schema.createTable("event_brewing", table => {
    table.increments("id").primary();
    table.string("event_name");
    table.string("event_role");
    table.real("amount_owing");
    table.integer("member_id");
    table.integer("event_id");
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("event_brewing");
};
