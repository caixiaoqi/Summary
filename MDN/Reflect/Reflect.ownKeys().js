//返回一个由自身的属性键名组成的数组

//结果上等于
Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));

Reflect.ownKeys({z: 3, y: 2, x: 1}); // [ "z", "y", "x" ]
Reflect.ownKeys([]); // ["length"]