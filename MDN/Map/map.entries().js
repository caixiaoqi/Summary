//用于返回一个迭代器对象
var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

var mapIter=myMap.entries();


//以下两个是一样的
for( var i of mapIter){
  console.log(i);
}
for(var i of myMap){
  console.log(i)
}