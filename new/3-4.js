const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res){
    
    fs.readFile('www' + req.url, (err, data) => {
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