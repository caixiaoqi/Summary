Function.prototype.myApply=function(context,arr){
  var context=context||window;
  var args=[];
  var result;
  if(!arr){
    context.fn=this;
    result=context.fn();
  }
  else{
    args=args.slice(0);
    result=eval('context.fn('+args+')');
  }
  delete context.fn;
  return result;
}