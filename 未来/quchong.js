Array.prototype.quChong=function(){
  var result=[];
  for(var i=0;i<this.length;i++){
    if(result.indexOf(this[i])===-1){
      result.push(this[i]);
    }
  }
  return result;
}

Array.prototype.quChong2=function(){
  var result=[];
  for(var i=0;i<this.length;i++){
    if(this.indexOf(this[i])!=i){
      result.push(this[i]);
    }
  }
  return result;
}