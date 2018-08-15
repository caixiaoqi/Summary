//静态方法
//Array.of()和Array构造函数不同的在于处理参数的方式的不同
Array.of(7);  //[7]
Array.of(1,2,3)  //[1,2,3]

Array(7)  //[,,,,,,,]
Array(1,2,3)  //[1,2,3]

//模拟
if(!Array.of){
  Array.of=function(){
    return Array.prototype.slice.call(arguments);  //arguments被指定为this，从头开始剪切
  }
}
