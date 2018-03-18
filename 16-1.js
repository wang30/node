const express = require('express')

const server = express()

const userRouter = express.Router()
server.use('/user', userRouter)

userRouter.use('/1', (req, res) => {
    res.send('hello')
})
userRouter.use('/2', (req, res) => {
    res.send('world')
})

server.listen(8088)