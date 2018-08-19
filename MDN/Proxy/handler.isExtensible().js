//用来拦截Object.isExtensible()
//返回一个布尔值，或者可以转换为Boolean的值。
var p=new Proxy({},{
  isExtensible(target){
    console.log('called');
    console.log(this);   //handler中的this指的是handler对象
    return true;
    //也可以return 1;
  }
})
console.log(Object.isExtensible(p)) //called true

//约束
//Object.isExtensible(proxy) 必须同Object.isExtensible(target)返回相同值。