exports.up = function (knex, Promise) {
    return knex.schema.createTable('hostels', (hostel) => {
        hostel.increments('id')
        hostel.string('name')
        hostel.float('latitude')
        hostel.float('longitude')
        hostel.string('image')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('hostels')
}