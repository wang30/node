const express = require('express')

const server = express()

server.use('/', function(req, res){
    res.send(req.query)
})

server.listen(8088)