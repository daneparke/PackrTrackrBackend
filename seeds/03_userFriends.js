
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('userFriends').del()
    .then(function () {
      // Inserts seed entries
      return knex('userFriends').insert([
        {
          user_id: 1,
          friend_id: 3,
          pending_friendship: false,
        },
        {
          user_id: 1,
          friend_id: 4,
          pending_friendship: false,
        },
        {
          user_id: 1,
          friend_id: 6,
          pending_friendship: false,
        },
        {
          user_id: 1,
          friend_id: 7,
          pending_friendship: false,
        },
        {
          user_id: 1,
          friend_id: 8,
          pending_friendship: true,
        },
        {
          user_id: 1,
          friend_id: 9,
          pending_friendship: false,
        },

      ]);
    });
};
