exports.up = (knex, Promise) => {
  return knex.schema.createTable("transactions", table => {
    table.increments("id").primary();
    table.string("account");
    table.float("amount");
    table.string("code");
    table.string("reference");
    table.string("particular");
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable("transactions");
};
