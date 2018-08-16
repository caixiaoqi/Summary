//get方法用于从一个Map对象中获得指定的元素
var myMap = new Map();
myMap.set("bar", "foo");

myMap.get("bar");  // 返回 "foo".
myMap.get("baz");  // 返回 undefined.