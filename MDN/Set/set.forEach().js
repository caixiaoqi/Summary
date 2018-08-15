
var obj={'a':'a'};

var mySet=new Set();
mySet.add(1).add('1').add('foo');
mySet.forEach(function(value1,value2,set){
  console.log('s['+value1+'] = '+value2+this['a']);  //这里不要忘了a是要加引号的，[]中的是字符串
},obj)
//forEach()第一个参数输一个函数，和数组的forEach一样，但是这个函数的第一二给参数都是value
//第二个参数将作为foreach中传入函数的this值