//entries()方法返回一个遍历器对象，其next().value是类似[value,value]形式的数组
//value是集合对象中的每个元素

var mySet=new Set();
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");
 
var setIter=mySet.entries(); //返回一个遍历器对象  
console.log(setIter);       //SetIterator {"foobar", 1, "baz"}

console.log(setIter.next().value)  //["foobar", "foobar"]
console.log(setIter.next().value)  //[1, 1]
console.log(setIter.next().value)  //["baz", "baz"]
console.log(setIter.next().value)  //undefined