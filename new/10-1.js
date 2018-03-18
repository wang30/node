const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser({extended: false}))

server.use('/', function(req, res) {
    res.send(req.body) 
})

server.listen(8088)