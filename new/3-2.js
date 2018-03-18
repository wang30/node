const fs = require('fs')

fs.writeFile('3-2.txt', 'hello nodejs', function(err){
    if(err) {
        console.log(err)
    }
    else {
        console.log('write success')
    }
})