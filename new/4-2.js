const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
    const urlObj = url.parse(req.url)
    const queryObj = qs.parse(urlObj.query) 
    console.log(queryObj)

    res.end('hello')
})

server.listen(8088)