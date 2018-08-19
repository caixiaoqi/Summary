//当读取代理对象的原型的时候，改方法就会被调用
//返回值必须是一个对象或者null

var obj={};
var p=new Proxy(obj,{
  getPrototypeOf(target){
    console.log(target===obj); //true
    console.log(this);   //handler中的this指的是handler对象
    return Array.prototype;
  }
})
//这5种方法都会触发
console.log(
  Object.getPrototypeOf(p)===Array.prototype,
  Reflect.getPrototypeOf(p)===Array.prototype,
  p._proto_=Array.prototype,
  Array.prototype.isPrototyeOf(p),
  p instanceof Array
)

//约束：
//1.必须返回对象或者null
//2.目标对象不可扩展，且getPrototypeOf（）方法返回的不是目标对象的原型。