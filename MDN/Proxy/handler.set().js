//set用于拦截设置属性值的操作
var p=new Proxy({},{
  set(target,property,value,receiver){

  }
})
//target表示要代理的对象
//property表示要设置的属性
//value表示要设置属性的值
//receiver表示Proxy对象本身

//返回值：布尔值。成功返回true，失败了在非严格模式下返回false，严格模式抛出类型错误。


var p=new Proxy({},{
  set(target,property,value){
    console.log('called: '+property+' = '+value);
    console.log(target[property]);
    console.log(this);   //handler中的this指的是handler对象
    return true;
  }
})
p.a=50;
//called: a = 50
//undefined
//实际上这个时候，你还没有设置tagert上的属性

//约束：会抛出TypeError
//1.目标属性不可写且不可配置，那么不能改变它的值
//2.set方法为undefined