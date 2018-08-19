//和Object.defineProperty()功能一样
//但是不同的是Object.defineProperty()返回设置后的对象，而Reflect.defineProperty()返回布尔值

Reflect.defineProperty(target,property,descriptor);

var obj={};
Reflect.defineProperty(obj,'a',{
  value:100,
  writable:true,
  configurable:true,
  enumerable:true
})      //true
Object.getOwnPropertyDescriptor(obj,'a')===Reflect.getOwnPropertyDescriptor(obj,'a');//false