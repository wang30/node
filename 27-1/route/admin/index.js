const express = require('express')
const mysql = require('mysql')
const common = require('../../libs/common.js')

const db = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '4512',
    database: 'learn' 
})

module.exports = ()=>{
    const router = express.Router()

    router.use((req, res, next)=>{
        if(!req.session['admin_id'] && req.url != '/login'){
            res.redirect('/admin/login')
        }
        else {
            next()
        }
    })

    router.use('/login', require('./login.js')())

    router.use('/banners', require('./banner.js')())

    router.use('/custom', require('./custom.js')())
    
    router.get('/', (req, res)=>{
        res.render('admin/index.ejs', {})
    })

    return router
}