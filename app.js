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


// app.delete('/users/:id', (req, res) => {
//     queries.deleteUser(req.params.id).then(res.status(204).send())
// })

// app.get('/snacks', (req, res) => {
//     queries.getAllSnacks().then(response => res.status(200).send(response))
// })
// app.get('/snacks/:id', (req, res) => {
//     queries.getSnackById(req.params.id).then(snack => res.status(200).send(snack[0]))
// })
// app.post('/snacks', (req, res) => {
//     queries.createSnack(req.body).then(snack => {
//         res.send(snack)
//     })
// })
// app.delete('/snacks/:id', (req, res) => {
//     queries.deleteSnack(req.params.id).then(() => res.status(204).send())
// })
// app.put('/snacks/:id', (req, res) => {
//     queries.editSnack(req.params.id, req.body).then(editSnack => res.json(editSnack))
// })
// app.get('/reviews', (req, res) => {
//     queries.getAllReviews().then(response => res.send(response))
// })
// app.get('/reviews/:id', (req, res) => {
//     queries.getReviewById(req.params.id).then(review => res.status(200).send(review[0]))
// })
// app.post('/reviews', (req, res) => {
//     queries.createReview(req.body).then(review => {
//         res.send(review)
//     })
// })
// app.delete('/reviews/:id', (req, res) => {
//     queries.deleteReview(req.params.id).then(() => res.status(204).send())
// })
// app.put('/reviews/:id', (req, res) => {
//     queries.editReview(req.params.id, req.body).then(editReview => res.json(editReview))
// })

// app.get('*', (req, res) => {
//     res.send('page not found: 404')
// })



const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)