exports.up = function (knex, Promise) {
    return knex.schema.createTable('userFriends', (userFriend) => {
        userFriend.increments('id')
        userFriend.integer('friend_id').references('id').inTable('users').onDelete('cascade')
        userFriend.integer('user_id').references('id').inTable('users').onDelete('cascade')
        userFriend.boolean('pending_friendship')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('userFriends')
}