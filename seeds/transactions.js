exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("transactions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("transactions").insert([
        {
          account: "rowValue1",
          amount: 124.45,
          code: "june",
          reference: "payment",
          particular: "football"
        },
        {
          account: "rowValue1",
          amount: 14.45,
          code: "aug",
          reference: "payment",
          particular: "beer brewing"
        },
        {
          account: "rowValue1",
          amount: -24.45,
          code: "may",
          reference: "repay",
          particular: "yoga"
        }
      ]);
    });
};
