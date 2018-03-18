const express = require('express')
const qs = require('querystring')

const server = express()

server.use((req, res, next) => {
    let str = ''
    req.on('data', (data)=>{
        str += data
    })
    req.on('end', ()=>{
        req.body = qs.parse(str)
        next()
    })
})

server.use('/', function(req, res) {
    res.send(req.body) 
})

server.listen(8088)