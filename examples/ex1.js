'use strict'
let promise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve(123);
  }, 2000);
});


promise.then(
  (res) => {
    console.log("fullfilled -> f1: " + res)
  },
  (err) => {
    console.log("rejected -> throw1: " + err);
  }
);

promise.then(
  (res) => {
    console.log("fullfilled -> f2: " + res)
  } 
);

promise.then(
  null,
  (err) => {
    console.log("rejected -> throw2: " + err)
  } 
);