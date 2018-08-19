//Reflect和Prxoyi杨，都是ES6为了操作对象而提供的新的API。
//目的：
//1.将Object对象的一些明显属于语言内部的方法部署到Reflect上，比如Object.defineProperties
//2.修改某些Object方法的返回结果，让其更合理。比如,Object.defineProperties(obj,key,descriptor)
//   原来返回true或者抛出TypeError，现在Reflec返回true或false
//3.让所有对象的操作都变成函数行为。现在有些对象的操作还是命令式的，比如 name in obj、delete obj[key]
//   而Reflect.deleteProperty(obj,property) Reflect.has()
//4.Reflect和Proxy的方法一一对应。这样可以使Proxy对象调用对应的Reflect方法来完成默认行为

new Proxy(target,{
  set(target,property,value,receiver){
    var success=Reflect.set(target,property,value,receiver);
    if(success){
      console.log('OK');
    }
    return success;
  }
})