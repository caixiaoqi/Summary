//用于查找数组中第一个满足测试函数的值,并返回。否则返回undefined
arr.find(callback,[,thisArg]);

var arr=[5,18,8,130,44];
arr.find(function(value){
  return value>10
})

//find()这个函数hi遍历每个索引，即从0到length-1.
//所以对于稀疏数组，没有赋值的还是要遍历
//对于已经删除的元素，也是要遍历，所以效率一般