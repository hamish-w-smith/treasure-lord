exports.up = (knex, Promise) => {
  return knex.schema.createTable("committee", table => {
    table.increments("id").primary();
    table.string("position");
    table.string("member_id");
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("committee");
};
