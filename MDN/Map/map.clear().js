//用于清除Map对象中的所有元素

var myMap=new Map();
myMap.set('bar','baz');
myMap.set(1,'foo');
console.log(myMap.size);    //2
myMap.clear();
console.log(myMap.size);    //0