//静态方法 Reflect.getOwnPropertyDescriptor() 与 Object.getOwnPropertyDescriptor() 方法相似。
//如果在对象中存在，则返回给定的属性的属性描述符。否则返回 undefined。 

Reflect.getOwnPropertyDescriptor(target, propertyKey);

//与Object.getOwnPropertyDescriptor()的不同在于，
//如果第一个参数不是对象，Reflect会抛出TypeError，但是Object会将第一个参数强制转换为对象处理
