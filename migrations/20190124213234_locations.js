exports.up = function (knex, Promise) {
    return knex.schema.createTable('locations', (location) => {
        location.increments('id')
        location.integer('trip_id').references('id').inTable('trips').onDelete('cascade')
        location.float('latitude')
        location.float('longitude')
        location.string('name')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('locations')
}