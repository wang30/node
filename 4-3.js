const http = require('http');
const Url = require('url');

const server = http.createServer((req, res) => {
    const obj = Url.parse(req.url, true)

    console.log(obj.pathname, obj.query)
    
    res.write('444')
    res.end()
})

server.listen(8088);