'use strict'

let fs = require('fs');

function getPath(callback) {
  setTimeout(()=>{
    callback(null, "./ex12.js");
    //callback("Error");
  }, 1000);
}



// getPath((err, path)=>{
//   if (err) {
//     throw err;
//   }
//   fs.readFile(path, (err, data)=>{
//     if (err) {
//       throw err;
//     }
//     console.log(data.toString());
//   });
// });

let getPathAsync = function() {
  return new Promise((resolve, reject)=>{
    getPath((err, path)=>{
      if (err) {
        reject(err);
      }
      resolve(path);
    });
  });
}

let readFileAsync = function(filepath) {
  return new Promise((resolve, reject)=>{
    fs.readFile(filepath, (err, data)=>{
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}


getPathAsync()
  .then(readFileAsync)
  .then((data)=>{
    console.log(data.toString());
  })
  .catch((err)=>{
    console.log(err);
  });

