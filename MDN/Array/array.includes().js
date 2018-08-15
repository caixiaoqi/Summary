//用来判定数组中是否包含某个值，返回一个布尔值。
var array1=[1,2,3];
array1.includes(2);

//语法
arr.includes(searchElement,fromIndex);
//fromIndex表示从哪里开始寻找。默认值是0，也可以是负值。

//如果负数太大，计算出的索引小于0，即fromIndex+length<0，则从头开始
array1.includes(1,-400);     //true