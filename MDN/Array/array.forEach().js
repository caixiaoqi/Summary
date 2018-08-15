//对数组中的每一个元素都执行一次提供的函数
array.forEach(callback,[,thisArg]);
//对于已经删除和未初始化的项将跳过

//foreach（）返回的是undefined，不像map或者reduce等等，不可链式调用。

//对象复制函数
function copy(obj){
  var copy=Object.create(Object.getPrototypeOf(obj));
  var propNames=Object.getOwnPropertyNames(obj);
  propNames.forEach(function(name){
    var desc=Object.getOwnPropertyDescriptor(obj,name);
    Object.defineProperty(copy,name,desc);
  })
  return copy;
}

var words = ["one", "two", "three", "four",'five'];
words.forEach(function(word) {
  console.log(word);
  if (word === "two") {
    words.shift();
  }
});
// one two four five
//这是由于遍历到two时，去掉了one，所有的元素都要往前提一个。但是forEach遍历
//的顺序在之前就已经确定，所以three会被跳过。