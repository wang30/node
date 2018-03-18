const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const path = './static'

    fs.readFile(path + req.url, (err, data) => {
        if(err) {
            res.write('not found')
        }
        else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(8088);