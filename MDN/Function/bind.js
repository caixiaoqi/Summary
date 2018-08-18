


Function.prototype.myBind=function(context){
  var self=this;
  var args=Array.prototype.slice.call(arguments,1);
  var fBonud=function(){
     //构造函数的时候this指向实例，self一直指向绑定的函数，
     //此时实例继承自self.prototype
    //普通函数的时候this指向window
    self.apply(this instanceof self?this: context,args.concat(Array.prototype.slice.call(arguments)))
  }
  fBonud.prototype=self.prototype;
  return fBonud;
}