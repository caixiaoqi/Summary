//就像在一个对象上设置属性
//返回一个布尔值
Reflect.set(target,property,value,receiver);

var obj={}
Reflect.set(obj,'a',100);
console.log(obj.a);
