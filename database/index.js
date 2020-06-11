const mysql = require("mysql")

const db = mysql.createConnection({
    host : "www.db4free.net",
    user : "evanderk",
    password : "Evander_98",
    database : "road_condition",
    // port : 3306
})

module.exports = db