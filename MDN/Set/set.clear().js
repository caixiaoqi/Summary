//clear清除Set对象中所有的值，返回值是undefined
var mySet=new Set();
mySet.add(1);
mySet.add('1').add(5).add('some text');
mySet.has(1);
mySet.clear();//里面什么都没有了
mySet.has(1);
