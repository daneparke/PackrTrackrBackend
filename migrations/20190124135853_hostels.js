exports.up = function (knex, Promise) {
    return knex.schema.createTable('hostels', (hostel) => {
        hostel.increments('id')
        hostel.string('name')
        hostel.double('latitude')
        hostel.double('longitude')
        hostel.string('image')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('hostels')
}