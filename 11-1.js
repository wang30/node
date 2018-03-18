const express = require('express')

const server = express()

server.use('/aaa', function(req, res) {
    res.cookie('name', 'wang', {path: '/aaa', maxAge: 30*24*3600*1000})
    
    res.send('hello')
})

server.listen(8088)