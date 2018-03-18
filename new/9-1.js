const express = require('express')

const server = express()

server.use('/aa', function(req, res){
    res.send('hello')
})
server.use('/bb', function(req, res){
    res.send({a: 1, b: 2})
})

server.listen(8088)