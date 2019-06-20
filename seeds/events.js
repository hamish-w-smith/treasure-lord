exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("events")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("events").insert([
        {
          event_name: "brewing",
          budget: 200,
          sc_contribution: 100,
          mem_contribution: 100,
          event_id: 1
        },
        {
          event_name: "football",
          budget: 200,
          sc_contribution: 100,
          mem_contribution: 100,
          event_id: 1
        },
        {
          event_name: "party",
          budget: 200,
          sc_contribution: 100,
          mem_contribution: 100,
          event_id: 1
        }
      ]);
    });
};
