//返回一个key的迭代器对象，对比set

var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

var mapIter = myMap.keys();

for (var i of mapIter){
  console.log(i);
}