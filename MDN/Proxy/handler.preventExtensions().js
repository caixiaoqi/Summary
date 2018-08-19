//用来拦截Object.preventExtensions()
//返回布尔值
var p=new({},{
  preventExtensions(target){
    console.log('called');
    console.log(this);   //handler中的this指的是handler对象
    Object.preventExtensions(target);
    return true;
  }
})

//约束
//如果要preventExtensions的队形本身已经是不可扩展的，那么返回的布尔值只能是true