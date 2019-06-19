exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("members")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("members").insert([
        { id: 1, name: "hamish", email: "hamish@work.com" },
        { id: 2, name: "jenny", email: "jenny@work.com" },
        { id: 3, name: "forest", email: "forest@work.com" }
      ]);
    });
};
