const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'test',
    user: 'root',
    password: '4512'
})

db.query('SELECT `name` FROM `user`', (err, data) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
})