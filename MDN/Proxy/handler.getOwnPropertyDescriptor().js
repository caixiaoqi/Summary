//用于拦截Object.getOwnPropertyDescriptor()操作
//返回一个Object或者undefined


var p=new Proxy({},{
  getOwnPropertyDescriptor(target,property){
    console.log('called: '+property);
    console.log(this);   //handler中的this指的是handler对象
    return {
      value:10,
      configurable:true,
      writable:true,
      enumerable:true
    }
  }
})
Object.getOwnPropertyDescriptor(p,'aa');

//约束
//1.必须返回一个Object或undefined
//2.存在的话就不能返回undefined
//3.不存在的属性也不能报告为存在，只能undefined