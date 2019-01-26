
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('hostelMessages').del()
    .then(function () {
      // Inserts seed entries
      return knex('hostelMessages').insert([
        {
          hostel_id: 1,
          user_id: 3,
          messageBody: "Anyone want to go to Boulder tomorrow?"
        },
        {
          hostel_id: 1,
          user_id: 3,
          messageBody: "Anyone?"
        },
        {
          hostel_id: 1,
          user_id: 4,
          messageBody: "Red Rocks Anyone?"
        },
        {
          hostel_id: 1,
          user_id: 5,
          messageBody: "I want to go to red rocks"
        },
        {
          hostel_id: 1,
          user_id: 2,
          messageBody: "Does anyone want to go ski/snowboard?"
        },
        {
          hostel_id: 1,
          user_id: 6,
          messageBody: "What is the easiest resort to get to from Denver?"
        },
        {
          hostel_id: 1,
          user_id: 6,
          messageBody: "I really want to go to Trinidad (said nobody ever)"
        },
      ]);
    });
}
