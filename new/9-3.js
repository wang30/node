const express = require('express')
const static = require('express-static')

const server = express()

server.use('/aa', static('./www'))

server.listen(8088)