//只要迭代器对象中有一个Promise的状态变为resolve或者reject，最终的Proise就会改变
Promise.race(iterable);

var p1=new Promise((resolve,rejecct)=>{
  setTimeout(()=>{
    resolve('one');
  },500)
})
var p2=new Promise((resolve,rejecct)=>{
  setTimeout(()=>{
    resolve('two');
  },100)
})
Promise.race([p1,p2]).then(value=>{
  console.log(value)
})      //two
Promise.all([p1,p2]).then(value=>{
  console.log(value)
})    //(2) ["one", "two"]