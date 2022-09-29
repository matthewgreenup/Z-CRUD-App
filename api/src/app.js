const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bcrypt = require('bcrypt');
const {
    getAllUsers,
    getAllItems,
    postUser,
} = require('./controllers')

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const salt = 10;
const {hash, compare} = bcrypt;

app.get('/', (req, res) => {
    res.status(200).send("you're home")
})

//USERS
app.get('/user', (req, res) => {
    getAllUsers()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
})
app.post('/user', (req, res) => {
    const tempUser = req.body;

    hash(tempUser.password, salt)
        .then(passHash => {
            console.log('given password for test purposes: ', tempUser.password)
            console.log('passHash for test purposes: ', passHash)
            postUser(tempUser, passHash)
            .then(data => res.status(200).send(data))
            .catch(err => res.status(500).send(err))
        })
        .catch(err => res.status(500).send(err))

})


//ITEMS
app.get('/item', (req, res) => {
    getAllItems()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
})


module.exports = app;