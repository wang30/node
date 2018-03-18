const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use( bodyParser.urlencoded({}) )

server.use('/', function(req, res){
    console.log(req.body)
})

server.listen(8088)