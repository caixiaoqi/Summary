//set.values和set.keys都是一样的，返回一个迭代器对象
var mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

var setIter=mySet.values();//返回一个迭代器(iterable)对象


console.log(setIter.next().value); //'foo'