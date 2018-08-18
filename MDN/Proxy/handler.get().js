//用于拦截对象的读取属性操作
var p=new Proxy({},{
  get:function(target,property,receiver){

  }
})
//target表示被代理的对象
//property表示要读取的属性
//receivei表示Proxy对象


var p=new Proxy({},{
  get(target,property,receiver){
    console.log('called: '+property);
    return 10;
  }
})
p['a'];

//但是有约束
//1.如果要读取的属性不可写而且不可配置，则返回值必须与目标属性的值相同，否则报TypeError
//2.如果目标对象的get没有定义，那么返回值必须是undefined，否则报TypeError