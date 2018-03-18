const http = require('http');
const qs = require('querystring')

const server = http.createServer((req, res) => {
    let str = ''
    req.on('data', (data)=>{
        str += data
    })
    req.on('end', () => {
        const json = qs.parse(str)
        console.log(json)
    })

    res.write('hello')
    res.end()
})

server.listen(8088)