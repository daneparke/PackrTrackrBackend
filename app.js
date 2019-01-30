const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const queries = require('./queries')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())

//hostels
app.get('/hostels', (req, res) => {
    queries.getAllHostels().then(response => res.send(response))
})
app.get('/hostels/:id', (req, res) => {
    queries.getHostelById(req.params.id).then(hostel => res.status(200).send(hostel[0]))
})
app.post('/hostels', (req, res) => {
    queries.createHostel(req.body).then(hostel => {
        res.send(hostel[0])
    })
})
app.delete('/hostels/:id', (req, res) => {
    queries.deleteHostel(req.params.id).then(() => res.status(204).send())
})
app.put('/hostels/:id', (req, res) => {
    queries.editHostel(req.params.id, req.body).then(editHostel => res.json(editHostel))
})

//Users
app.get('/users', (req, res) => {
    queries.getAllUsers().then(response => res.send(response))
})
app.get('/users/:id', (req, res) => {
    queries.getUserById(req.params.id).then(user => res.status(200).send(user[0]))
})
app.post('/users', (req, res) => {
    queries.createUser(req.body).then(user => {
        res.send(user[0])
    })
})
app.delete('/users/:id', (req, res) => {
    queries.deleteUser(req.params.id).then(() => res.status(204).send())
})
app.put('/users/:id', (req, res) => {
    queries.editUser(req.params.id, req.body).then(editUser => res.json(editUser))
})

//hostelUsers
app.get('/hosteluser', (req, res) => {
    queries.getAllHostelUsers().then(response => res.send(response))
})
app.get('/hosteluser/:id', (req, res) => {
    queries.getHostelUserById(req.params.id).then(hostelUser => res.status(200).send(hostelUser[0]))
})
app.post('/hosteluser', (req, res) => {
    queries.createHostelUser(req.body).then(hostelUser => {
        res.send(hostelUser[0])
    })
})
app.delete('/hosteluser/:id', (req, res) => {
    queries.deleteHostelUser(req.params.id).then(() => res.status(204).send())
})
app.put('/hosteluser/:id', (req, res) => {
    queries.editHostelUser(req.params.id, req.body).then(editHostelUser => res.json(editHostelUser))
})

//Hostel Messages
app.get('/hostelmessages', (req, res) => {
    queries.getAllHostelMessages().then(response => res.send(response))
})
app.get('/hostelmessages/:id', (req, res) => {
    queries.getHostelMessageById(req.params.id).then(hostelMessage => res.status(200).send(hostelMessage[0]))
})
app.post('/hostelmessages', (req, res) => {
    queries.createHostelMessage(req.body).then(hostelMessage => {
        res.send(hostelMessage[0])
    })
})
app.delete('/hostelmessages/:id', (req, res) => {
    queries.deleteHostelMessage(req.params.id).then(() => res.status(204).send())
})
app.put('/hostelmessages/:id', (req, res) => {
    queries.editHostelMessage(req.params.id, req.body).then(editHostelMessage => res.json(editHostelMessage))
})
//User Friends
app.get('/userfriends', (req, res) => {
    queries.getAllUserFriends().then(response => res.send(response))
})
app.get('/userfriends/:id', (req, res) => {
    queries.getUserFriendById(req.params.id).then(userFriend => res.status(200).send(userFriend[0]))
})
app.post('/userfriends', (req, res) => {
    queries.createUserFriend(req.body).then(userFriend => {
        res.send(userFriend[0])
    })
})
app.delete('/userfriends/:id', (req, res) => {
    queries.deleteUserFriend(req.params.id).then(() => res.status(204).send())
})
// app.put('/userfriends/:id', (req, res) => {
//     queries.editUserFriend(req.params.id, req.body).then(editUserFriend => res.json(editUserFriend))
// })
//Friends Messages
app.get('/friendsmessages', (req, res) => {
    queries.getAllFriendsMessages().then(response => res.send(response))
})
app.get('/friendsmessages/:id', (req, res) => {
    queries.getFriendsMessageById(req.params.id).then(friendsMessage => res.status(200).send(friendsMessage[0]))
})
app.post('/friendsmessages', (req, res) => {
    queries.createFriendsMessage(req.body).then(friendsMessage => {
        res.send(friendsMessage[0])
    })
})
app.delete('/friendsmessages/:id', (req, res) => {
    queries.deleteFriendsMessage(req.params.id).then(() => res.status(204).send())
})
app.put('/friendsmessages/:id', (req, res) => {
    queries.editFriendsMessage(req.params.id, req.body).then(editFriendsMessage => res.json(editFriendsMessage))
})
//Trips
app.get('/trips', (req, res) => {
    queries.getAllTrips().then(response => res.send(response))
})
app.get('/trips/:id', (req, res) => {
    queries.getTripById(req.params.id).then(trip => res.status(200).send(trip[0]))
})
app.post('/trips', (req, res) => {
    queries.createTrip(req.body).then(trip => {
        res.send(trip[0])
    })
})
app.delete('/trips/:id', (req, res) => {
    queries.deleteTrip(req.params.id).then(() => res.status(204).send())
})
app.put('/trips/:id', (req, res) => {
    queries.editTrip(req.params.id, req.body).then(editTrip => res.json(editTrip))
})

app.get('*', (req, res) => {
    res.send('page not found: 404')
})

const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)