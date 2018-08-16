myMap.forEach(callback,[, thisArg])
//其中callback是每个元素都要执行的函数
//有三个参数，value、key、Map对象
function logMapElements(value, key, map) {
  console.log("m[" + key + "] = " + value);
}
Map([["foo", 3], ["bar", {}], ["baz", undefined]]).forEach(logMapElements);