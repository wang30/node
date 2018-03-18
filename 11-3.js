const express = require('express')
const cookieParser = require('cookie-parser')

const server = express()

server.use(cookieParser('sjdfmvalkdfwe'))

server.use('/', function(req, res) {
    req.secret = 'sjdfmvalkdfwe'
    res.cookie('user', 'Danny', {signed: true})

    console.log('签名cookie：', req.signedCookies)
    console.log('未签名cookie: ', req.cookies)

    res.send('hello')
})

server.listen(8088)