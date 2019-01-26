exports.up = function (knex, Promise) {
    return knex.schema.createTable('hostelUser', (hostelUser) => {
        hostelUser.increments('id')
        hostelUser.integer('hostel_id').references('id').inTable('hostels').onDelete('cascade')
        hostelUser.integer('user_id').references('id').inTable('users').onDelete('cascade')
        hostelUser.string('review')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('hostelUser')
}