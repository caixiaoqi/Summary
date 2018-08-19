//用来拦截Object.setPrototypeOf()
//返回值：如果成功修改了[[prototype]]，返回true，否则返回false
var p=new Proxy({},{
  setPrototypeOf(target,prototype){

  }
})
//prototype为对象原型或为null

//如果你不想为你的对象设置一个新的原型，可以将setPrototype方法的返回值设置为false，或者抛出异常
var handleReturnFalse={
  setPrototypeOf(target,prototype){
    return false
  }
}
var newProto={}, target={};
var p1=new Proxy(target,handleReturnFalse);

