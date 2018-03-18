const http = require('http');

const server = http.createServer((req, res) => {
    res.write('hello nodejs');
    res.end();
})

server.listen(8088);