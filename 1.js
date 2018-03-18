const buffer = require('buffer').Buffer;

const buf1 = buffer.alloc(10);
const buf2 = buffer.alloc(10, 1);
const buf3 = buffer.allocUnsafe(10);
const buf4 = buffer.from([1,2,3]);
const buf5 = Buffer.from('tést');

console.log(buf5);
