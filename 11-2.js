const express = require('express')
const cookieParser = require('cookie-parser')

const server = express()

server.use(cookieParser())

server.use('/aaa/bbb', function(req, res) {
    console.log(req.cookies)

    res.send('hello')
})

server.listen(8088)