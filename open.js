//child process is a node module used to create sub proccess within a script
//you can perfrom diffrent tasks with your script by just using some methods

// const cp = require('child_process')
// // cp.execSync('calc')
// // cp.execSync('start chrome')
// // cp.execSync('anna uniersity')
// console.log('output' + cp.execSync('node test1.js'));

// const os = require('os')


// console.log(os.arch());//architechture(64 or 32)

// console.log(os.platform());

// console.log(os.networkInterfaces());

// console.log(os.totalmem());
// console.log(os.freemem());


//path module
// const { log } = require('console')
// const path = require('path')


// let ext = path.extname('D:\\node\\node moudule system\\f1.txt')
// let baseName = path.basename('D:\\node\\node moudule system\\f1.txt')
// console.log(ext);      
// console.log(baseName);             
// console.log(__filename);
// console.log(__dirname);

//File system module


// const fs = require('fs')

//reading a file

// let fileContent = fs.readFileSync('f1.txt')
// console.log('data of file 1-> ',fileContent);
// console.log('data of file 1->' + fileContent);

//writing in a file
//if the file name that is passed is passed doesn't not exists a new file will be created with its
//name and the data will be written on that file 

// fs.writeFileSync('f2.txt','this is file 2')

// console.log('file has been written');

//append a file
//appnedFileSync method adds new data to a previosuly written file 

// fs.appendFileSync('f3.txt','this is updataed data')
// console.log('file has been appended');

// deleting a file

// fs.unlinkSync('f2.txt')

// console.log('file has been deleted');

//directories

//create a directory

// fs.mkdirSync('myDirectory')

//check the content inside of a directory

// let folderPath = 'D:\\node\\node moudule system\\myDirectory'
// let folderContent = fs.readdirSync(folderPath)
// console.log("folderContent " , folderContent);

//check wheter a directory exists or not

// let doesExist = fs.existsSync('myDirectory')
// console.log(doesExist);

//remove directory

// fs.rmdirSync('myDirectory')
// console.log('file has been deleted');

const fs = require ('fs')
// let fileContent = fs.readFileSync('arun.txt')
// console.log('data of file 1->'+fileContent);
fs.writeFileSync('arun.txt','Hello World')
console.log('file has been written');