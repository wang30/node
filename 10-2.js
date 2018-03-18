const express = require('express')
const qs = require('querystring')

const server = express()

server.use(function(req, res, next) {
    let str = ''
    req.on('data', function(data) {
        str += data
    })
    req.on('end', function(){
        req.body = qs.parse(str)
        next()
    })

})

server.use('/', function(req, res){
    console.log(req.body)
})

server.listen(8088)