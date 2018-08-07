Function.prototype.myCall=function(context){
  var context=context||window;
  context.fn=this;

  var args=[];
  for(var i=1;i<arguments.length;i++){
    args.push(arguments[i]);
  }
  var result=eval('context.fn('+args+')');
  delete context.fn;
  return context;
}









Function.prototype.myApply=function(context,arr){
  var context=context||window;
  context.fn=this;
  var result;
  if(!arr){
    result=context.fn();
  }
  else{
    var args=[];
    for(var i=0;i<arr.length;i++){
      args.push(arr[i]);
    }
    result=eval('context.fn('+args+')');
  }
  delete context.fn;
  return result;
}








//bind返回的函数也可以当构造函数，此时this以前指定的值没用了，
//但是传入的参数还有用
Function.prototype.myBind=function(context){
  var self=this;
  var args=Array.prototype.slice.call(arguments,1);
  var fBound=function(){
    //构造函数的时候this指向实例，self一直指向绑定的函数，此时实例继承自self.prototype
    //普通函数的时候this指向window
    self.apply(this instanceof self ?this: context,args.concat(Array.prototype.slice.call(arguments)));
  }
  fBound.prototype=self.prototype;
  return fBound;
}




//原生的new
function New(f){
  return function(){
    var o={"_proto_":f.prototype};
    f.call(o,arguments);
    return o;
  }
}