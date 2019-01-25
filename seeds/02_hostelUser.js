
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('hostelUser').del()
    .then(function () {
      // Inserts seed entries
      return knex('hostelUser').insert([
        {
          hostel_id: 1,
          user_id: 3,
        },
        {
          hostel_id: 1,
          user_id: 4,
        },
        {
          hostel_id: 1,
          user_id: 5,
        },
        {
          hostel_id: 1,
          user_id: 6,
        },
        {
          hostel_id: 1,
          user_id: 7,
        },
        {
          hostel_id: 1,
          user_id: 9,
        },
      ]);
    });
};
