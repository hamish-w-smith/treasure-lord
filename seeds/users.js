exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, name: "hamish", email: "hamish@work.com" },
        { id: 2, name: "jenny", email: "jenny@work.com" },
        { id: 3, name: "forest", email: "forest@work.com" }
      ]);
    });
};
