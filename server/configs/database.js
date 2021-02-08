const mysql2 = require("mysql2")

let db = mysql2.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'mysql1099',
  database: 'sns'
});

db.promiseSql = function promiseSql (sql) {
  try {
    return new Promise((resolve, reject) => {
      db.query(sql, (err, res) => {
        err && reject(err)
        res && resolve(res)
      })
    })
  } catch (err_1) {
    console.log(err_1)
  }
}

module.exports = db

