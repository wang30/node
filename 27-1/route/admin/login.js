const express = require('express')
const common = require('../../libs/common.js')
const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '4512',
    database: 'learn' 
})

module.exports = ()=>{
    const router = express.Router()

    router.get('/', (req, res) => {
        res.render('admin/login.ejs', {})
    })
    router.post('/', (req, res) => {
        db.query(`SELECT * FROM admin_table WHERE username='${req.body.name}'`, (err, data)=>{
            if(data.length === 0){
                res.send('未注册').end()
            }
            else if(common.md5(req.body.password) === data[0].password){
                req.session['admin_id'] = '1'
                res.redirect('/admin')
            }
            else {
                res.send('密码错误').end()
            }
        })
    })

    return router
}