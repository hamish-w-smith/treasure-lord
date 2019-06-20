exports.up = (knex, Promise) => {
  return knex.schema.createTable("events", table => {
    table.increments("id").primary();
    table.string("event_name");
    table.real("budget");
    table.real("sc_contribution");
    table.real("mem_contribution");
    table.integer("event_id");
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("events");
};
