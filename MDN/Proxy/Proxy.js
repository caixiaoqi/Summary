let p=new Proxy(target,handler);
//target和handler都是对象，handler的属性是当执行一个操作时定义代理的行为的函数。


//简单的例子
let handler={
  get:function(target,key){
    return key in target? target[key]:17;
  }
}
var target={
  x:99
}
var p=new Proxy(target,handler);
console.log(p.x,p.y);       //99   17 


//通过代理，可以验证向一个对象的传值
let validator={
  set:function(target,key,value){
    if(key==='age'){
      if(Number.isInteger(value)){
        throw new TypeError('this age is not integer');
      }
      if(value>200){
        throw new RangeError('this age seems invalid')
      }
      target[age]=value;
    }
  }
}
var p=new Proxy({},validator);
p.age=100;
console.log(p.age);
p.age=250;
console.log(p.age);
p.age=2.3;
console.log(p.age);