const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Valentina20',
    database: 'games-shopping'
})

module.exports = Connection;
