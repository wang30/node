const ejs = require('ejs')

ejs.renderFile('./12-2.ejs', {name: 'wang'}, (err, data)=>{
    console.log(data)
})

