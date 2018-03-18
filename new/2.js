const http = require('http')

const server = http.createServer(function(req, res){
    switch(req.url) {
        case '/aaa':
            res.write('this is aaa')
            break
        case '/bbb':
            res.write('i am bbb')
            break
        default:
            res.write('i am default')    
    }
    res.end()
})

server.listen(8088)