//主要是拦截new操作
//必须返回一个对象，否则报错
 var p=new Proxy(target,{
   construct(target,args,newTarget){
    return new target(...args);
   }
 })
 //target表示将要执行的目标函数、目标对象
 //args表示传入的参数列表
 //newTarget表示最初调用的构造函数，比如上面的例子就是Proxy对象P

