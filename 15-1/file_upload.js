const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const fs = require('fs')
const pathLib = require('path')

const server = express()

const objMulter = multer({dest: './www/upload/'})
server.use(objMulter.any())

server.post('/', function(req, res) {
    const newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext

    fs.rename(req.files[0].path, newName, function(err){
        if(err) {
            res.send('upload fail')
        }
        else {
            res.send('upload success')
        }
    })
})

server.listen(8088)