//返回一个array迭代器


var array1 = ['a', 'b', 'c'];
var iterator = array1.keys(); 
console.log(iterator.next().value)  //0--数字

var entries=array1.entries();
console.log(entries.next().value)  //[0, "a"]--数组
for(var i of entries){
  console.log(i);      //[0,'a']   [1,'b']   [2,'c']
}