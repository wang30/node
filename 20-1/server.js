const express = require('express')
const static = require('express-static')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const multer = require('multer')
const consolidate = require('consolidate')
const mysql = require('mysql')

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
server.set('views', './template')
//使用何种模板引擎
server.engine('html', consolidate.ejs)

const db = mysql.createPool({
    host: 'localhost',
    port: '3306',
    database: 'test',
    user: 'root',
    password: '4512'
})

server.use('/', (req, res, next)=>{
    db.query('SELECT * FROM `banner`', (err, data)=>{
        if(err) {
            res.status(500).send('database error').end()
        }
        else {
            res.banners = data
            next()
        }
    })
})

server.use('/', (req, res, next)=>{
    db.query('SELECT title, summary, ID FROM `artical`', (err, data)=>{
        if(err) {
            res.status(500).send('database error').end()
        }
        else {
            res.news = data
            next()
        }
    })
})

server.use('/index', (req, res)=> {
    res.render('index.ejs', {banners: res.banners, news: res.news})
})

server.use('/news', (req, res) => {
    if(req.query.id) {
        if(req.query.act === 'like') {
            db.query(`UPDATE artical SET n_like=n_like+1 WHERE id=${req.query.id}`, (err, data)=>{
                if(err) {
                    res.status(500).send('数据库错误：' + err).end()
                }
            })
        }
        
        db.query(`SELECT * FROM artical where id=${req.query.id}`, (err, data)=>{
            if(err) {
                res.status(500).send('database error').end()
            }
            else {
                data[0].content = data[0].content.replace(/^/gm, '<p>').replace(/$/gm, '</p>')
                res.render('conText.ejs', {artical: data[0]})     //这里还需要判断一下查询结果是否为空
            }
        })
        
    }
    else {
        res.status(404).send('找不到您请求的文章').end()
    }
})

server.use(static('./www'))

server.listen(8088)