//相当于从 object (target[propertyKey]) 中获取属性，但它是作为一个函数执行的
Reflect.get(target,property,[,receiver]);

var obj={x:1,y:2};
Reflect.get(obj,'x');
Reflect.get(['one','two'],1)

//第一个参数必须是对象，不然会抛出TypeError