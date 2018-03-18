const pug = require('pug')

let str = pug.renderFile('./12-1.pug', {pretty: true, a: 12, b: 5})
console.log(str)
