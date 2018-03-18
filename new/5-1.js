const http = require('http')
const qs = require('querystring')

const server = http.createServer((req, res) => {
    let str = ''
    req.on('data', (data) => {
        str += data
    })
    req.on('end', () => {
        console.log( qs.parse(str) )
    })

    res.end('hello')
})

server.listen(8088)