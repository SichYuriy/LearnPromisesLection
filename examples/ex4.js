'use strict'

let fs = require('fs');
let Promise = require('bluebird');

function getPath(callback) {
  setTimeout(()=>{
    callback(null, "./ex1.js");
    //callback("Error");
  }, 1000);
}

let getPathAsync = Promise.promisify(getPath);
let readFileAsync = Promise.promisify(fs.readFile);

Promise.promisifyAll(fs);

getPathAsync()
  .then(fs.readFileAsync)
  .then((data)=>{
    console.log(data.toString());
  })
  .catch((err)=>{
    console.log(err);
  });

