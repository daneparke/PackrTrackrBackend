
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('hostelUser').del()
    .then(function () {
      // Inserts seed entries
      return knex('hostelUser').insert([
        {
          hostel_id: 1,
          user_id: 3,
          review: 'good'
        },
        {
          hostel_id: 1,
          user_id: 4,
          review: 'good'
        },
        {
          hostel_id: 1,
          user_id: 5,
          review: 'good'
        },
        {
          hostel_id: 1,
          user_id: 6,
          review: 'good'
        },
        {
          hostel_id: 1,
          user_id: 7,
          review: 'good'
        },
        {
          hostel_id: 1,
          user_id: 9,
          review: 'good'
        },
      ]);
    });
};
