//用来拦截Object.getOwnPropertyNames()
//Object.getOwnPropertySymbols()
//Object.keys()
//Reflect.ownKeys()

//约束：
//1.必须返回一个数组
//2.数组中元素必须是symbol或者string

var p=new Proxy({},{
  ownKeys(target){
    console.log(this);   //handler中的this指的是handler对象
    return ['a','b','c'];
  }
})
console.log(Object.getOwnPropertyNames(p)); // [ 'a', 'b', 'c' ]