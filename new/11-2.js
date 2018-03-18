const express = require('express')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')

const server = express()

server.use(cookieParser())
server.use(cookieSession({
    name: 'sess',
    keys: ['jikd', 'jsbxvc'],
    maxAge: 2*3600*1000
}))

server.use('/', (req, res)=>{
    //req.session['count'] = 1
    
    // res.send(req.session)
    delete req.session
    res.send('hello')
})

server.listen(8088)