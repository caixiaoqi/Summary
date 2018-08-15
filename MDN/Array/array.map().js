//map（）方法创建一个新数组，其结果是原数组中每个元素电泳calback
arr.map(callback,[,thisArg]);
//使用 map 方法处理数组时，数组元素的范围是在 callback 方法第一次
//调用之前就已经确定了。在 map 方法执行的过程中：原数组中新增加的元素
//将不会被 callback 访问到；若已经存在的元素被改变或删除了，则它们
//callback 的值是 map 方法遍历到它们的那一时刻的值；而被删除的元素将不会被访问到。

var elems=document.querySelectorAll('select option:checked');
var values=Array.prototype.map.call(elems,function(elem){
  return elem.value;
})