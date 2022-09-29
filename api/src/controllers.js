let knexInit = require('knex');
const knex = knexInit(require('../knexfile')[process.env.NODE_ENV || "development"])


//USERS
const getAllUsers = () => {
    return knex('users')
}
const postUser = () => {
    
}


//ITEMS
const getAllItems = () => {
    return knex('items')
}


module.exports = {
    getAllUsers,
    getAllItems,
    postUser,
}