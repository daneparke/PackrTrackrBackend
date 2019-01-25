exports.up = function (knex, Promise) {
    return knex.schema.createTable('trips', (trip) => {
        trip.increments('id')
        trip.integer('user_id').references('id').inTable('users').onDelete('cascade')
        trip.boolean('current_travel')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('trips')
}