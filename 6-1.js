const http = require('http')
const fs = require('fs')
const qs = require('querystring')
const Url = require('url')

let users = {};    //{"wang": 123456}

const server = http.createServer((req, res) => {
    const obj = Url.parse(req.url, true)
    const url = obj.pathname
    const get = obj.query

    let str = ''
    req.on('data', (data) => {
        str += data                     
    })
    req.on('end', () => {
        const post = qs.parse(str)
    })  
 
    if(url === '/user'){
        switch(get.act){
            case 'reg':
                if(users[get.user]) {
                    res.write('{"ok": false, "msg": "user already exist"}')
                }
                else {
                    users[get.user] = get.pass
                    res.write('{"ok": true, "msg": "register success"}')
                }
                break;
            case 'login':
                if(users[get.user]==null){
                    res.write('{"ok": false, "msg": "user not exist"}')
                }
                else if(users[get.user] != get.pass){
                    res.write('{"ok": false, "msg": "name or password not correct"}')
                }
                else {
                    res.write('{"ok": true, "msg": "login success"}')
                }
                break;
            default:
                res.write('{"ok": false, "msg": "unknown act"}')         
        }
        res.end()
    }
    else {
        const url2 = './static' + obj.pathname
        fs.readFile(url2,  (err, data) => {
            if(err) {
                res.write('not found')
            }
            else {
                res.write(data)
            }
            res.end()
        })
    }
})

server.listen(8088)