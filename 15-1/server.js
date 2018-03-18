const express = require('express')
const static = require('express-static')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const multer = require('multer')
const consolidate = require('consolidate')

const server = express()

server.use(cookieParser('adfjlakmwyetrbf'))
 
server.use(cookieSession({
    name: 'sess-id', 
    keys: 'asdfjladaowijf',
    maxAge: 20*3600*1000
}))

server.use(bodyParser.urlencoded({extended: false}))
server.use(multer({dest: './www/upload/'}).any())

//输出什么
server.set('view engine', 'html')
//模板文件在哪
server.set('views', './views')
//使用何种模板引擎
server.engine('html', consolidate.ejs)

server.use('/index', (req, res)=>{
    res.render('1.ejs', {name: 'wang'})
})

server.use(static('./www'))

server.listen(8088)