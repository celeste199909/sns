const db = require("../configs/database")

async function getAllUser () {
  return db.promiseSql("select * from user")
}
// 
async function getAUser (username) {
  return db.promiseSql(`select * from user where username='${username}'`)
}

async function addUser (userinfo) {
  let { username, password } = userinfo
  return db.promiseSql(`insert into user (username, password) values (${username},${password})`)
}

module.exports = {
  getAllUser, getAUser, addUser
}
