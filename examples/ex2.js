'use strict'

let promise = new Promise((resolve, reject)=>{
  console.log('1'); 
  setTimeout(()=>{
    resolve(1);
  }, 1000);
});

promise.then((res)=>{
  console.log('after1->1');
  return res;
}).then((res)=>{
  console.log('aaa')
  return 3;
});

promise.then((res)=>{
  console.log('after1->2');
  return res;
}).then((res)=>{
  console.log('bbbb');
});

