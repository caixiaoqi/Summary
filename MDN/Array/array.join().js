//返回一个字符串，不会改变原来的数组

function f(){
  return Array.prototype.join.call(arguments,'-');
}
f(1,'yuqi','2');      //"1-yuqi-2"