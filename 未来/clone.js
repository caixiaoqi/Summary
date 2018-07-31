function classof(obj){
  return Object.prototype.toString.call(obj).slice(8,-1);
}

function clone(obj){
  var result;
  if(classof(obj)==="Object"){
    result={};
  }else if(classof(obj)==="Array"){
    result=[];
  }else{
    return obj;
  }

  for(var key in obj){
    if(classof(obj)==="Object"){
      result[key]=arguments.callee(obj);
    }else if(classof(obj)==="Array"){
      result[key]=arguments.callee(obj);
    }
    else{
      result[key]=obj;
    }
  }
  return result;
}