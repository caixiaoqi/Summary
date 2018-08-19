//用于拦截对象的Object.defineProperty()操作
//返回布尔值，表示是否操作成功
var p=new Proxy({},{
  defineProperty(target,property,descriptor){

  }
})
//descripto表示属性描述符对象

var p=new Proxy({},{
  defineProperty(target,property,descriptor){
    console.log('called: '+property);
    console.log(this);   //handler中的this指的是handler对象
    return true;
  }
})
Object.defineProperty(p,'a',{
  value:10,
  writable:true,
  configurable:true,
  enumerable:true
})

//约束：否则抛出TypeError
//1.如果对象不可扩展
//2.如果该属性已存在且不可配置
