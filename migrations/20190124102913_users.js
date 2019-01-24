exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', (user) => {
        user.increments('id')
        user.string('first_name')
        user.string('last_name')
        user.string('email')
        user.string('password')
        user.string('country')
        user.boolean('admin')
        user.string('profile_image')
        user.string('about_me')
        user.boolean('travel_status')
        user.boolean('checkin_status')
        user.string('whats_app_number')
    })
}

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('users')
}