
//Promise是一个代理对象，相当于一个容器，他保存的是异步事件的一个状态，一个结果。
//Promise对象是由关键字new创建。
//把一个叫做“处理器函数”（executor function）作为函数
//接受两个参数，resolved和rejected作为其参数。

function myAsyncFunction(url){
  return new Promise(function(resolve,reject){
    const xhr=new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onload=function(){
      resolve(xhr.responseText);  
    }      
    xhr.onerror=function(){
      reject(xhr.statusText);
    }
    xhr.send();
  })
}

//简单的例子
var myFirstPromise=new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve('成功了');
  },1000)
}).then(function(successMessage){
  console.log(successMessage);
})

