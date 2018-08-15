//entries()返回数组的遍历器对象

var arr=['a','b','c'];
var iter=arr.entries();
//console.log(iter);
var a=[];


//遍历器对象next（）方法运行
console.log(iter.next().value);  //[0, "a"]

//使用for-of循环
var arr=['4',4,5];
for(let i of arr){
  console.log(i)  // '4' 4 5
}