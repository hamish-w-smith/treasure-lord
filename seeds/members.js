exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("members")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("members").insert([
        {
          id: 1,
          first_name: "hamish",
          last_name: "smith",
          email: "hamish@work.com",
          account_name: "hamish",
          amount_owing: 20
        },
        {
          id: 2,
          first_name: "jenny",
          last_name: "curran",
          email: "jenny@work.com",
          account_name: "jenny",
          amount_owing: 20
        },
        {
          id: 3,
          first_name: "forest",
          last_name: "gump",
          email: "forest@work.com",
          account_name: "gump",
          amount_owing: 20
        }
      ]);
    });
};
