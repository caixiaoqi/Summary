let obj={
  data:['hello','world'],
  [Symbol.iterator](){
    var self=this,index=0;  //this指向的是这个对象，obj
    return{
      next(){
        if(index<self.data.length){
          return {
            value:self.data[index++],
            done:false
          }
        }
        else{
          return {value:undefined,done:true}
        }
      }
    }
  }
}

for(let i of obj){
  console.log(i);
}
//'hello'   'world'