let knexInit = require('knex')
const knex = knexInit(
  require('../knexfile')[process.env.NODE_ENV || 'development']
)

//USERS
const getAllUsers = () => {
  return knex('users')
}
const getUserById = id => {
  return knex('users').where('user_id', id)
}
const getUserByUsername = username => {
  username = username.toLowerCase();
  return knex('users').whereILike('username', username)
}
const deleteUser = id => {
  return knex('users')
    .where('user_id', id)
    .del()
    .then(data => data)
}
const patchUser = (userId, user) => {
  console.log('userid: ', userId, 'user: ', user)
  return knex('users')
    .where('user_id', userId)
    .update(user)
    .then(data => data)
}
const getAllUsersAndItems = () => {
return knex('items')
.join('users', 'items.user_id', '=', 'users.user_id')

}
const getUserItemById = (userId) => {
  return knex('items')
  .join('users', 'items.user_id', '=', 'users.user_id')
  .where("items.user_id", userId)
  }

const postUser = (tempUser, passHash) => {
  const newUser = {
    first_name: tempUser.first_name,
    last_name: tempUser.last_name,
    username: tempUser.username,
    passHash: passHash
  }

  return knex('users').insert(newUser)
}
const getPassHash = givenUsername => {
  console.log(givenUsername, "is username")
  givenUsername = givenUsername.toLowerCase();
  return knex('users')
    .whereILike('username', givenUsername)
    .select('passHash')
    .then(data => data[0].passHash)
}

//ITEMS
const getAllItems = () => {
  return knex('items')
}
const getItemById = id => {
  return knex('items').where('item_id', id)
}
const getItemByUserId = userId => {
  return knex('items').where('user_id', id)
}
const postItem = item => {
  return knex('items').insert(item)
}
const deleteItem = id => {
  return knex('items')
    .where('item_id', id)
    .del()
    .then(data => data)
}
const patchItem = (itemId, item) => {
  return knex('items')
    .where('item_id', itemId)
    .update(item)
    .then(data => data)
}

module.exports = {
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
  getAllUsersAndItems,
  getUserByUsername,
  getItemByUserId,
  getUserItemById,
}
