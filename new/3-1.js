const fs = require('fs')

fs.readFile('2.js', function(err, data){
    if(err) {
        console.log(err)
    }
    else {
        console.log(data.toString())
    }
})