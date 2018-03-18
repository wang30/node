const express = require('express')
const static = require('express-static')

const server = express()

let users = {
    'wang': 123,
    'li': 456
}

server.get('/login', function(req, res) {
    const user = req.query['user'];
    const pass = req.query['pass'];
    
    if(users[user]==null){
        res.send( {ok: false, msg: '用户不存在'} )
    }
    else if(users[user] != pass){
        res.send( {ok: false, msg: 'password is not correct'} )
    }
    else {
        res.send( {ok: true, msg: 'login success'} )
    }
    res.end()
})

server.use(static('./static'))

server.listen(8088)