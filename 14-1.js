const ejs = require('ejs')

let str = ejs.renderFile('./14-4.ejs', {
    user: [
        {name: 'wang'},
        {name: 'danny'},
        {name: 'liming'}
    ], 
    type: 'admin'
}, function(err, data){
    if(err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
})