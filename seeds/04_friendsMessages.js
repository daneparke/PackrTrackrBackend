
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('friendsMessages').del()
    .then(function () {
      // Inserts seed entries
      return knex('friendsMessages').insert([
        {
          friends_id: 1,
          message_body: 'Hey Kate, where are you now?'
        },
        {
          friends_id: 2,
          message_body: "Where's the Beef?"
        },
        {
          friends_id: 3,
          message_body: 'Hey Phil, how is Galvanize?'
        },
        {
          friends_id: 4,
          message_body: 'Daniel how did you make these sweet logos!?'
        },
        {
          friends_id: 5,
          message_body: 'Hey James, are you still stick?'
        },
        {
          friends_id: 6,
          message_body: 'Good morning love, where in the world are you now?'
        },
      ]);
    });
};
