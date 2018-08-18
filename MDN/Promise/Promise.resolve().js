//Promise.resolve(value)返回一个给定值  解析后  的Promise对象。
//如果value这个值是个thenable，即带有then方法，返回的Promise会 跟随 这个thenable的对象，采用它的最终状态
//如果传入的value本身就是Promise对象，则该对象作为Promise.resolve方法的返回值返回。


//返回的是  解析的给定值的  Promise对象
Promise.resolve(value);
Promise.resolve(promise);
Promise.resolve(thenable);

//如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
var original=Promise.resolve('我再第二行');
var cast=Promise.resolve(original);  //原封不动 cast====original
cast.then(function(value){
  console.log('value: '+value)
})
console.log('original===cast ? '+ (cast===original));


//resolve thenable的对象们并抛出错误
//thenable对象指的是具有then方法的对象
let thenable={
  then:function(resolve,reject){
    resolve(40);
  }
} 
var p1=Promise.resolve(thenable)
.then(function(value){
  console.log('OK: '+value);
},function(value){
  console.log('error')
})
//传入thenable对象之后，Promise.resolve会将这个对象转换为Promise对象，
//然后立即执行thenable对象中的then方法