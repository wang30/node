const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const urlObj = url.parse(req.url, true)
    console.log( urlObj.query )
    
    res.end('hello')
})

server.listen(8088)