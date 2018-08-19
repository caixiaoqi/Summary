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


//Proxy并不是对象的透明代理，即不做任何拦截的情况下也无法保证与目标对象的行为一致。
//主要原因是在Proxy代理的情况下，目标对象中的this会指向Proxy代理。
var target={
  m(){
    return this===target;       //true
  }
}
target.m();
var p=new Proxy(target,{});
p.m();            //false

//此外，有些原生对象的内部属性智能通过正确的this获得，所以Proxy无法代理。
var target=new Date();
console.log(target);
var handler={};
var p=new Proxy(target,handler);
console.log(target.getDate());
p.getDate();      //TypeError,因为getDate只能在Date对象上获取，如果this不是Date独享实例会报错。
//修改
var target=new Date();
var p=new Proxy(target,{
  get(target,property){
    if(property==='getDate'){
      return target.getDate.bind(target); //这里要返回一个函数，因为getDate属性是返回一个函数的
      //后面的括号（）代表执行
    }
  }
})
p.getDate();

//实现一个数组的负数取值
function createArray(...element){
  var target=[];
  target.push(...element);
  var handler={
    get(target,property){
      var index=Number(property);
      if(index>=0){
        return target[index];
      }
      else{
        return target[index+target.length];
      }
    }
  }
  return new Proxy(target,handler);//返回一个Proxy
}
createArray(1,2,3,4,5,6,7,8,9)[-4]   //6