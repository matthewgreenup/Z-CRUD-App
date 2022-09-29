let knexInit = require('knex')
const knex = knexInit(
  require('../knexfile')[process.env.NODE_ENV || 'development']
)

//USERS
const getAllUsers = () => {
  return knex('users')
}
const getUserById = id => {
  return knex('users').where('id', id)
}
const deleteUser = id => {
    return knex('users')
      .where('id', id)
      .del()
      .then(data=>data)
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
  return knex('users')
    .where('username', givenUsername)
    .select('passHash')
    .then(data => data[0].passHash)
}

//ITEMS
const getAllItems = () => {
  return knex('items')
}
const getItemById = id => {
  return knex('items').where('id', id)
}
const postItem = item => {
  return knex('items').insert(item)
}
const deleteItem = id => {
  return knex('items')
    .where('id', id)
    .del()
    .then(data=>data)
}
const patchItem = (itemId, item) => {
    return knex('items').where('id',itemId).update(item).then(data=>data);
  }
//   const putItem = (itemId, item) => {
//     console.log('this is item: ', item)
//     return knex('items').where('id',itemId).update({
//             // user_id: item.user_id || null, 
//             // item_name: item.item_name || null, 
//             // description: item.description || null, 
//             // quantity: item.quantity ||null,

//             user_id: item.user_id, 
//             item_name: item.item_name, 
//             description: item.description, 
//             quantity: item.quantity,
//     }).returning('*').then(data=>data);
//   }

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
//   putItem,
}
