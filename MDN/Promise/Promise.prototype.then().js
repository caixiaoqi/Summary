
//支持两个函数作为参数
//then方法返回一个Promise,因此可以链式调用






//状态响应函数返回一个值
var p=new Promise((resolve,reject)=>{
  reject('success');
});
p.then(
  message=>{
    console.log('ok'+message);     //没有返回值，其实就是返回undefined
  },
  message=>{
    console.log('error'+message)
  }                           //then此时返回的Promise将会变为接受状态，并且将返回值
)                             //作为接受状态的回调函数的参数值。
.then(message=>{              //只要返回一个值，不管是在resolve还是在reject中返回，
  console.log(message);       //下一个都是resolve
  console.log('resolve');
},message=>{
  console.log('reject');
})
// errorsuccess  undefined  resolve








//状态相应函数返回一个新的Promise，那么下一级的.then（）会在新Promise状态改变之后执行。
Promise.resolve('foo')
.then((string)=>{
  return new Promise((resolve,reject)=>{  //返回一个Promise
    setTimeout(() => {
      string+='bar';
      resolve(string)
    }, 1000);
  })
})
//接受foobar
.then(function(string){
  string+='baz';
  console.log(string)
  return string;
})
.then(function(string) {
  console.log("Last Then:  oops... didn't bother to instantiate and return " +
              "a promise in the prior then so the sequence may be a bit " +
              "surprising");
  console.log(string);
});







//第一个then()会返回一个resolved Promise包装的24，即使之前的是rejected，甚至是undefined。
Promise.reject()
.then(()=>40,()=>24)
.then(solution=>{
  console.log('Resolved with '+solution)
})
//Resolved with 24
