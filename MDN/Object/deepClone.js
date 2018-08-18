function classOf(obj){
  return Object.prototype.toString.call(obj).slice(8,-1);
}

function deepClone(obj){
  var result;
  if(classOf(obj)==='object'){
    result={};
  }
  else if(classOf(obj)==='array'){
    result=[];
  }
  else{
    result=obj;
    return result;
  }

  for(var key in obj){
    if(classOf(obj[key])==='array'||classOf(obj[key])==='object'){
      deepClone(obj[key])
    }
    else{
      result[key]=obj[key];
    }
  }
  
  return result;
}