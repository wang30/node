const express = require('express')

module.exports = ()=>{
    const router = express.Router()

    router.use('/', (req, res) => {
        res.send('this is web').end()
    })

    return router
}