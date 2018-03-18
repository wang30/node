const fs = require('fs');

fs.readFile('1.js', (err, data) => {
    if(err) {
        console.log('read fail'); 
    }
    else {
        console.log(data.toString());
    }
})