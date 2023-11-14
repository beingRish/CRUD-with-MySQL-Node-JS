const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Rishabh12345@',
    database: 'employeeDB'
})



module.exports = mysqlPool