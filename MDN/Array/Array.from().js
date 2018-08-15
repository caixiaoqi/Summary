//静态方法，返回一个数组
Array.from(arrayLike,mapFn,thisArg);
//其中mapFn，新数组的每个元素都会执行该回调函数，就是相当于map函数
//thisArg指定map（）函数时的this对象的值
//arrayLike可以传入一个伪数组对象，如arguments对象（拥有一个length属性），字符串等
//this也可以是可迭代对象，如Set和Map

Array.from('foo');  //Array from a atring 

let s=new Set([1,'1']);
Array.from(s);      //Array form a set


//数组去重
function combine(){
  let arr=[].concat.apply([],arguments);
  return Array.from(new Set(arr));
}