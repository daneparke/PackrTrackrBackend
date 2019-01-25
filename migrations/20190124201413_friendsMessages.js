exports.up = function (knex, Promise) {
    return knex.schema.createTable('friendsMessages', (message) => {
        message.increments('id')
        message.integer('friends_id').references('id').inTable('userFriends').onDelete('cascade')
        message.string('message_body')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('friendsMessages')
}