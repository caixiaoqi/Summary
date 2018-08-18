//在非严格模式下，如果thisArg为null或者undefined，
//它们会被转换为全局的对象作为this的值，如Window。

//严格模式下,就是null和undefined

Function.prototype.myCall=function(context){
  var context=context||window;
  context.fn=this;
  //var args=Array.prototype.slice.call(arguments,1);  这里是模拟，别用call了
  var args=[];
  for(var i=1,len=arguments.length;i<len;i++){
    args.push(arguments[i]);
  }
  var result=eval('context.fn('+args+')');
  delete context.fn;
  return result;
}