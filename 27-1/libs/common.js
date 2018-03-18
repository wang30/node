const crypto = require('crypto')

module.exports = {
    md5: (str)=>{
        const obj = crypto.createHash('md5')
        obj.update(str + 'jkmasdf#$%^&mlkejsnzjs!_)(abcss')
        return obj.digest('hex')
    }
}