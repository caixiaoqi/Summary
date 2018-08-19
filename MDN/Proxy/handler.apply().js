//最主要是为了拦截函数对象的调用、apply、call操作
//apply可以返回任何值

function sum(a,b){
  return a+b;
}
var handler={
  apply(target,thisArg,argumentList){
    console.log(this);                //this指的是handler对象
    return target(argumentList[0],argumentList[1])*10;
  }
}
var proxy1=new Proxy(sum,handler);
console.log(sum(1,2));
console.log(proxy1(1,2))
//target表示目标对象，也就是目标函数
//thisArg表示被调用时指定的上下文对象
//arguments表示被调用时的参数数组


