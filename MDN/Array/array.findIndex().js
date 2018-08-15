//返回数组中第一个满足测试函数的索引值，否只返回-1
var array1 = [5, 12, 8, 130, 44];

function findFirstLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(findFirstLargeNumber));


//语法
arr.findIndex(callback,[, thisArg])