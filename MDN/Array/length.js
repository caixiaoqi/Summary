//length的值是一个无符号的32-bit整数，它的值只能是0-2^32-1的整数
var nameListA=new Array(2^32);  //无效，因为超过了2^32-1

//可以通过设置length来截断和任何数组。
var a=[1,2,3,4,5];
console.log(a.length);
a.length=3;
console.log(a);