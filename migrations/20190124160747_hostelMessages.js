exports.up = function (knex, Promise) {
    return knex.schema.createTable('hostelMessages', (hostelMessage) => {
        hostelMessage.increments('id')
        hostelMessage.integer('hostel_id').references('id').inTable('hostels').onDelete('cascade')
        hostelMessage.integer('user_id').references('id').inTable('hostelUser').onDelete('cascade')
        hostelMessage.string('messageBody')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('hostelMessages')
}