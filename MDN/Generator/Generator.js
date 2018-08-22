function* fibonacii(){
  let [prev,curr]=[0,1];
  for(;;){
    [prev,curr]=[curr,prev+curr];
    yield curr;
  }
}

for(let n of fibonacii()){
  if(n>1000)  break;
  console.log(n)
}


var test={
  first:'hello',
  second:'world',
  [Symbol.iterator]:function*(){
    var keys=Reflect.ownKeys(this);
    for(var i of keys){
      yield this[i];      //this
    }
  }
}
for(var i of test){
  console.log(i);
}
// 'hello'
//  'world'
//ƒ* (){
  //var keys=Reflect.ownKeys(this);
  //for(var i of keys){
    yield this[i];      //this
  //}
//}