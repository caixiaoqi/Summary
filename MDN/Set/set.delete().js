var mySet=new Set();
mySet.add('foo');

//删除成功返回true，删除失败返回false


mySet.delete('bar'); //false，因为Set中没有bar这个值
mySet.delete('foo'); //true，删除成功
mySet.has('foo');