const http = require('http');

const server = http.createServer((req, res) => {
    switch(req.url) {
        case '/index':
            res.write('666');
            break;
        case '/wang':
            res.write('i am wang');
            break;
        default:
            res.write('not found');
            break;    
    }
    res.end();
})

server.listen(8088);