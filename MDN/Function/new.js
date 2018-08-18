
function New(f){
  return function(){
    var obj={};
    obj._proto_=f.prototype;
    f.call(obj,arguments);
    return obj;
  }
}

function test(){
  this.x=1;
}

New(test)();