//比较像new操作符
Reflect.construct(target,argumentsList,[,newTarget]);
//argumentsList表示构造函数参数对象
//newTarget为钩爪函数。默认与Target一样，但是当代理的时候指的是Proxy