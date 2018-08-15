//every（）方法测试是不是所有方法都通过了指定函数的测试
var arr=[1,30,39,29,10,13];

arr.every(function(currentValue){
  return currentValue<40;
})  //true


//具体方法
arr.every(callback,[,thisArg]);
//thisArg是执行callback时使用的this值

var arr=[1,30,39,29,10,13];
var obj={'a':1};
arr.every(function(currentValue){
  return this['a']+currentValue<41;
},obj)  //指定this的值为obj

//可以为callback指定this值。如果省略，非严格模式下为全局对象，严格模式下undefined