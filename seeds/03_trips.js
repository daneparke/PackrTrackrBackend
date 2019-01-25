
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          user_id: 1,
          current_travel: true
        },
        {
          user_id: 3,
          current_travel: true
        },
        {
          user_id: 4,
          current_travel: true
        },
        {
          user_id: 5,
          current_travel: true
        },
        {
          user_id: 6,
          current_travel: true
        },
        {
          user_id: 7,
          current_travel: true
        },
        {
          user_id: 9,
          current_travel: true
        },
        {
          user_id: 1,
          current_travel: false
        },
        {
          user_id: 9,
          current_travel: false
        },
        {
          user_id: 9,
          current_travel: false
        },
        {
          user_id: 9,
          current_travel: false
        },

      ]);
    });
};
