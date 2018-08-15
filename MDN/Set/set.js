//set对象存储的都是值，而且是任意类型的唯一值
//向set对象加入值的时候不会发生类型转换，也就是5和‘5’是两个不同的值，相当于====。
//Set中不会添加重复的值，但是和====还是有区别的
//虽然NaN！==NaN，但是Nan在Set中是一样的值，undefined也是一样的值，0和-0也是相等的

const set1=new Set(); //什么都不传入
typeof set1; //返回的是'object'
const set2=new Set([1,5,6,5])   //传入一个数组，或者具有iterable接口的其他数据结构
console.log(set2);  //Set(3) {1, 5, 6}


//size是一个整数，表示Set对象有多少条目。