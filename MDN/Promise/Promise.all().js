//返回一个Promise对象
Promise.all(iterable);
//iterable指的是一个可迭代的对象，比如Array、String、Set等等

//example 1
var p1=Promise.resolve(3);
var p2=1337;
var p3=new Promise((resolve,reject)=>{
  setTimeout(resolve,100,'foo')
})
Promise.all([p1,p2,p3]).then(function(value){
  console.log(value);
})      //[3, 1337, "foo"]

//example 2
var p = Promise.all([1,2,3]);
var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
var p3 = Promise.all([1,2,3, Promise.reject(555)]);
setTimeout(function(){
    console.log(p);
    console.log(p2);
    console.log(p3);
});
//d都是Promise对象
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }

new Promise(function(resolve,reject){
  throw new Error('error');
})
.then(value=>{
  console.log('resolved')
},(reject)=>{
  console.log('rejected')
})
.catch(e=>{
  console.log('no')
})