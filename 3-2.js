const fs = require('fs');

fs.writeFile('3-2.txt', 'hello content', (err) => {
    if(err) {
        console.log('write fail'); 
    }
    else {
        console.log('write success');
    }
})