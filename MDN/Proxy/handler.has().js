//可以看作是针对in操作的钩子
//返回一个布尔值

var p=new Proxy({},{
  has(target,property){       //这个函数中this指的就是handler
    console.log('called '+property);
    console.log(this);   //handler中的this指的是handler对象
    return true;
  }
})
//拦截foo in proxy


//约束
