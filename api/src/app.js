const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bcrypt = require('bcrypt')
const {
  getAllUsers,
  getAllItems,
  postUser,
  getPassHash,
  getItemById,
  getUserById,
  postItem,
  deleteItem,
  deleteUser,
  patchItem,
  patchUser,
  getAllUsersAndItems
  //   putItem,
} = require('./controllers')

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const salt = 10
const { hash, compare } = bcrypt

app.get('/', (req, res) => {
  res.status(200).send("you're home")
})

//USERS
app.get('/user', (req, res) => {
  getAllUsers()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
})
app.get('/user/:id', (req, res) => {
  let id = req.params.id
  getUserById(id)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
})
app.delete('/user/:id', (req, res) => {
  let id = req.params.id
  deleteUser(id)
    .then(data => res.status(200).json(data))
    // .then(data => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
})
app.patch('/user/:id', (req, res) => {
  let userId = req.params.id
  let user = req.body
  patchUser(userId, user)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
})

app.post('/user', (req, res) => {
  const tempUser = req.body

  hash(tempUser.password, salt)
    .then(passHash => {
      //   console.log('given password for test purposes: ', tempUser.password)
      //   console.log('passHash for test purposes: ', passHash)
      postUser(tempUser, passHash)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
    })
    .catch(err => res.status(500).send(err))
})

app.post('/signin', (req, res) => {
  let { username, password } = req.body[0]
  getPassHash(username)
    .then(passHash => {
      // console.log('password: ', password, '|| passHash: ', passHash)
      compare(password, passHash)
        .then(comparison => {
          comparison ? res.status(200).json(true) : res.status(400).json(false)
        })
        .catch(err => res.status(500).json(err))
    })
    .catch(err => res.status(400).json('username is incorrect'))
})

app.get('/useritem', (req, res) => {
    getAllUsersAndItems()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(500).send(err))
  })

//ITEMS
app.get('/item', (req, res) => {
  getAllItems()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
})
app.get('/item/:id', (req, res) => {
  let id = req.params.id
  getItemById(id)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
})
app.post('/item', (req, res) => {
  const item = req.body
  postItem(item)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
})
app.delete('/item/:id', (req, res) => {
  let id = req.params.id
  deleteItem(id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).send(err))
})
app.patch('/item/:id', (req, res) => {
  let itemId = req.params.id
  let item = req.body
  patchItem(itemId, item)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).send(err))
})
//   app.put('/item/:id', (req, res) => {
//     let itemId = req.params.id
//     let item = req.body;
//     putItem(itemId, item)
//     .then(data => res.status(200).json(data))
//     .catch(err => res.status(500).send(err))
//   })

module.exports = app
