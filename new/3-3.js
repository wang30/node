const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res){
    const path = req.url.slice(1)
    
    fs.readFile(path, (err, data) => {
        if(err) {
            res.write('not found')
        }
        else {
            res.write(data.toString())
        }    
        res.end()
    })
})

server.listen(8088)