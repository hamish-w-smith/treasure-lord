exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("event_brewing")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("event_brewing").insert([
        {
          event_name: "brewing",
          amount_owing: 20,
          event_role: "organiser",
          member_id: 1,
          event_id: 1
        },
        {
          event_name: "brewing",
          amount_owing: 20,
          event_role: "organiser",
          member_id: 3,
          event_id: 1
        },
        {
          event_name: "brewing",
          amount_owing: 20,
          event_role: "organiser",
          member_id: 2,
          event_id: 1
        }
      ]);
    });
};
