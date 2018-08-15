//concat返回的是一个新数组，此方法绝对不会改变原数组

var a=[1,2,3];
a.concat(['a','b','c']);

var num1=[1,2,3],
    num2=[4,5,6],
    num3=[7,8,9];

    var num=num1.concat(num2,num3);   //连接三个数组

    var nn=num1.concat('a',[77,88]);  //将值连接到数组 [1,2,3,'a',77,88]

    //合并嵌套数组
    var num1=[[1]];
    var num2=[2,[3]];
    var num=num1.concat(num2);
    //返回[[1],2,[3]];它只是连接数组里面的元素，不会破坏元素数组

    //concat方法创建一个数组，它不会递归到嵌套数组。
    //concat只是一个浅拷贝。
    //对于原始数据类型，就是把值复制到新数组中。
    //对于引用类型，concat只是将对象引用复制到新数组中。原始数组和新数组都引用同一个对象。