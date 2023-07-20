// const calculator =require('./calculator')



// // console.log('scaler is awesome');




// // function sayHello() {
// //     console.log('Hello From Mrinal');
    
// // }
// // sayHello()

// calculator.addition(3,4)
// calculator.substraction(5,2)
// calculator.multiplication(3,4)
// calculator.division(10,2)
// // let age = 35


// // console.log(global.name);
//Understanding callbacks and handling asynchronous operations
// const fs = require('fs');

// fs.readFile('f1.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading the file:', err);
//   } else {
//     console.log('File contents:', data);
//   }
// });
//
// const fs = require('fs');

// const readFilePromise = (filePath) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// readFilePromise('f1.txt')
//   .then(data => console.log('File contents:', data))
//   .catch(err => console.error('Error reading the file:', err));
// //
// const fs = require('fs');

// const readFileAsync = async (filePath) => {
//   try {
//     const data = await fs.promises.readFile(filePath, 'utf8');
//     console.log('File contents:', data);
//   } catch (err) {
//     console.error('Error reading the file:', err);
//   }
// };

readFileAsync('file.txt');
const fs = require('fs');

const readFileAsync = async (filePath) => {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    console.log('File contents:', data);
  } catch (err) {
    console.error('Error reading the file:', err);
  }
};

readFileAsync('file.txt');
