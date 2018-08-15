//浅拷贝一个数组片段，concat也是浅拷贝，原始数组不会被修改

function list(){
  return Array.prototype.slice.call(arguments);
}
list(1,'a',3);//[1, "a", 3]