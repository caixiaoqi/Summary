//handler.deleteProperty() 方法用于拦截对对象属性的 delete 操作。
//返回一个布尔值，表示是否删除成功
var p=new Proxy({},{
  deleteProperty(target,property){
    console.log('called: '+property);  //这个函数中的this的值就是target
    console.log(this);   //handler中的this指的是handler对象
    return true;
  }
})
delete p.a;

//约束
//如果目标对象上的对应属性不可配置，那么会抛出TypeError
