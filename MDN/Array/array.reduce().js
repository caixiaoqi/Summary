//用于将整个数组减少到一个值
arr.reduce(callback,[,initialValue]);

[1,2,3,4].reduce(function(accmulator,currentValue,currentIndex,arr){
  return accmulator+currentValue;
})   //10

//回调函数第一次调用的时候。
//当提供initialValue的时候，accmulator取值为initialValue，currentValue取值为数组第一个元素
//当没有提供initialValue的时候，accmulator取值为数组第一个元素，currentValue取值为数组第二个元素

//如果数组为空，且没有提供initialValue的时候，会报错
//如果数组仅仅只有一个元素，且没有提供初始值，那么不会执行callback，直接返回第一个值

//计算数组中每个元素出现的次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
names.reduce(function(allNames,currentName){
  if(allNames.currentName){
    allNames[currentName]++;
  }else{
    allNames[currentName]=1;
  }
  return allNames;
},{})