//时间复杂度O（2^n），空间复杂度O（n）
function fib(n){
  if(n==1||n==2){
    return 1;
  }
  return  fib(n-2)+fib(n-1);
}
fib(2);
fib(10);

//时间复杂度n，空间复杂度1
function fib(n){
  var a=1,b=1,res;
  for(var i=3;i<=n;i++){
    res=a+b;
    a=b;
    b=res;
  }
  return res;
}
fib(2);
fib(10);

//ES6

function fib(n){

  function* gen(){
    let[prev,curr]=[0,1];
    for(;;){
      [prev,curr]=[curr,curr+prev];
      yield curr;
    }
  }
  
  var ite=gen();
  for(i=0;i<n-1;i++){
    var result=ite.next().value;
  }
  return result;
}
console.log(fib(9))
console.log(fib(10))