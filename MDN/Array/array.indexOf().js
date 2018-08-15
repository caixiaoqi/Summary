//语法
arr.indexOf(searchElement,fromIndex)
//返回所在位置，悠久返回，没有返回-1

//找出指定元素出现的所有位置
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx=array.indexOf(element);
while(idx!=-1){
  indices.push(idx);
  idx=array.indexOf(element,idx+1);
}
