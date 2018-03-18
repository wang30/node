const express = require('express')
const cookieParser = require('cookie-parser')

const server = express()

server.use(cookieParser())

server.use('/', (req, res)=>{
    // res.cookie('user', 'wang', {path: '/', maxAge: 2*24*3600*1000})
    console.log( req.cookies )
    res.send('hello')
})

server.listen(8088)