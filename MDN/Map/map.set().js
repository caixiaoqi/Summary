//向map对象添加一个键值对，返回map对象，所以可以链式调用
var myMap=new Map();
myMap.set(1,1).set('foo','yuqi');
console.log(myMap.size);