const http = require('http')
const fs = require('fs')
const qs = require('querystring')
const Url = require('url')

const server = http.createServer((req, res) => {
    const obj = Url.parse(req.url, true)
    console.log(obj.pathname)
    console.log(obj.query)              //obtain 'get' data

    let str = ''
    req.on('data', (data) => {
        str += data                     //obtain 'post' data
    })
    req.on('end', () => {
        const json = qs.parse(str)
        console.log(json)
    })

    const url = './static' + obj.pathname
    fs.readFile(url, (err, data) => {
        if(err) {
            res.write('not found')
        }
        else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(8088)