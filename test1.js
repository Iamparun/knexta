//1
const fs = require ('fs')
fs.writeFileSync('arun.txt','Hello World')
console.log('file has been written');
//2
const fs = require ('fs')
fs.appendFileSync('arun.txt',' this is updataed data')
console.log('file has been appended');
// //3
const fs = require ('fs')
fs.unlinkSync('arun.txt')
console.log('file has been deleted');