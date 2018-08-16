//用于判断两个值是否是相同的值
//返回一个布尔值

undefined===undefined //true
NaN===NaN //false
0===-0  //true
+0===-0 //true
null===null//true
Infinity===Infinity//true

//Object.is()大部分情况下是和===一致,但是有两个是不一样的
Object.is(NaN,NaN)  //true
Object.is(0,-0)     //false
