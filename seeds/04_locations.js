
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
          latitude: 1,
          longitude: 23,
          name: "first"
        },
      ]);
    });
};
