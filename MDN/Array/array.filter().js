//fileter()方法创建一个新数组，其包含通过测试函数的所有元素
arr.filter(callback,[,thisArg]);

//filter遍历的范围在第一次调用callback的时候就已经确定了。
//在调用filter之后被添加到数组中的元素不会被filter遍历到。
//如果已经存在的元素被改变了，则他们出啊如callback的值是filter遍历到他们那一刻的值。
//被删除和从来都没有被赋值的元素不会被遍历到。


//可以将稀疏数组变为紧凑数组
//就是利用被删除和没有赋值的元素不会被遍历到
arr.filter(function(){
  return true;
})

[12,5,8,130,44].filter(function(x){
  return x<100;
})


//在数组中搜索,可用于表单控件的搜索
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

function filterItems(query){
  return fruits.filter(function(value){
    return value.toLowerCase.indexOf(query.toLowerCase)>-1;
  })
}

