const db = require('./database-connection')
module.exports = {
    //Hostel queries
    getAllHostels() {
        return db.select().from('hostels')
    },
    getHostelById(id) {
        return db('hostels').where('id', id)
    },
    createHostel(newHostel) {
        return db('hostels').insert(newHostel).returning('*')
    },
    editHostel(id, hostel) {
        return db('hostels').where('id', id).update(hostel).returning('*')
    },
    deleteHostel(id) {
        return db('hostels').where('id', id).delete()
    },
    //User queries
    getAllUsers() {
        return db.select().from('users')
    },
    getUserById(id) {
        return db('users').where('id', id)
    },
    createUser(newUser) {
        return db('users').insert(newUser).returning('*')
    },
    editUser(id, user) {
        return db('users').where('id', id).update(user).returning('*')
    },
    deleteUser(id) {
        return db('users').where('id', id).delete()
    },
    //Hostel user queries
    getAllHostelUsers() {
        return db.select().from('hostelUser')
    },
    getHostelUserById(id) {
        return db('hostelUser').where('id', id)
    },
    createHostelUser(newHostelUser) {
        return db('hostelUser').insert(newHostelUser).returning('*')
    },
    editHostelUser(id, hostelUser) {
        return db('hostelUser').where('id', id).update(hostelUser).returning('*')
    },
    deleteHostelUser(id) {
        return db('hostelUser').where('id', id).delete()
    },
    //Hostel messages queries
    getAllHostelMessages() {
        return db.select().from('hostelMessages')
    },
    getHostelMessageById(id) {
        return db('hostelMessages').where('id', id)
    },
    createHostelMessage(newHostelMessage) {
        return db('hostelMessages').insert(newHostelMessage).returning('*')
    },
    editHostelMessage(id, hostelMessage) {
        return db('hostelMessages').where('id', id).update(hostelMessage).returning('*')
    },
    deleteHostelMessage(id) {
        return db('hostelMessages').where('id', id).delete()
    },
    //User friends queries
    getAllUserFriends() {
        return db.select().from('userFriends')
    },
    getUserFriendById(id) {
        return db('userFriends').where('id', id)
    },
    createUserFriend(newUserFriend) {
        return db('userFriends').insert(newUserFriend).returning('*')
    },
    editUserFriend(id, userFriend) {
        return db('userFriends').where('id', id).update(userFriend).returning('*')
    },
    deleteUserFriend(id) {
        return db('userFriends').where('id', id).delete()
    },
    //Friends Messages queries
    getAllFriendsMessages() {
        return db.select().from('friendsMessages')
    },
    getFriendsMessageById(id) {
        return db('friendsMessages').where('id', id)
    },
    createFriendsMessage(newFriendsMessage) {
        return db('friendsMessages').insert(newFriendsMessage).returning('*')
    },
    editFriendsMessage(id, friendsMessage) {
        return db('friendsMessages').where('id', id).update(friendsMessage).returning('*')
    },
    deleteFriendsMessage(id) {
        return db('friendsMessages').where('id', id).delete()
    },
    //Trips queries
    getAllTrips() {
        return db.select().from('trips')
    },
    getTripById(id) {
        return db('trips').where('id', id)
    },
    createTrip(newTrip) {
        return db('trips').insert(newTrip).returning('*')
    },
    editTrip(id, trip) {
        return db('trips').where('id', id).update(trip).returning('*')
    },
    deleteTrip(id) {
        return db('trips').where('id', id).delete()
    },
    // getAllSnacks() {
    //     return db.select().from('snacks')
    // },
    // getSnackById(id) {
    //     return db('snacks').where('id', id)
    // },
    // createSnack(newSnack) {
    //     return db('snacks').insert(newSnack).returning('*')
    // },
    // editSnack(id, snack) {
    //     return db('snacks').where('id', id).update(snack).returning('*')
    // },
    // deleteSnack(id) {
    //     return db('snacks').where('id', id).delete()
    // },
    // getAllReviews() {
    //     return db.from('reviews').select('reviews.id', 'title', 'text', 'rating', 'snack_id', 'user_id')
    //         .leftJoin('users', 'user_id', 'users.id').select('users.first_name', 'users.last_name')
    // },
    // getReviewById(id) {
    //     return db('reviews').where('id', id)
    // },
    // createReview(newReview) {
    //     return db('reviews').insert(newReview).returning('*')
    // },
    // editReview(id, review) {
    //     return db('reviews').where('id', id).update(review).returning('*')
    // },
    // deleteReview(id) {
    //     return db('reviews').where('id', id).delete()
    // },
    // getAllUsers() {
    //     return db.select().from('users')
    // },
    // getUserById(id) {
    //     return db('users').where('id', id)
    // },
    // createUser(newUser) {
    //     return db('users').insert(newUser).returning('*')
    // },
    // deleteUser(id) {
    //     return db('users').where('id', id).delete()
    // }
}