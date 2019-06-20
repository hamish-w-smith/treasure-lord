exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("committee")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("committee").insert([
        { position: "president", member_ID: "1" },
        { position: "treasurer", member_ID: "2" },
        { position: "secretary", member_ID: "3" }
      ]);
    });
};
