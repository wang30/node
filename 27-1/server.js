const express = require('express')
const static = require('express-static')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const multer = require('multer')
const consolidate = require('consolidate')
const mysql = require('mysql')
const expressRoute = require('express-route')

const server = express()

//获取请求数据
const multerObj = multer({dest: './static/upload'})
server.use(multerObj.any())

server.use(bodyParser.urlencoded({extended: false}))

//cookie,session
server.use(cookieParser({}))
server.use(cookieSession({
    name: 'session_id',
    keys: ['afdniewhns', 'jsksmnxnshwy', 'wjsnbsvdf'],
    maxAge: 20*60*1000
}))

//模板
server.set('view engine', 'html')
server.set('views', './template')
server.engine('html',  consolidate.ejs)

const db = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '4512',
    database: 'learn' 
})

//route
server.use('/admin', require('./route/admin/index.js')())

server.use('/', require('./route/web.js')()) 

//static
server.use(static('./static'))

server.listen(8088)

