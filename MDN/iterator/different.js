//ES6的Array、Set、Map都部署了entries()、keys()、values()等3个方法

//Array
var arr=['a',1,true,{}];
for(var i of arr){
  console.log(i);
}       //'a',1,true,{}  
//默认使用的就是array.values()的迭代器
var iteractor1=arr.values();
for(var i of iteractor1){
  console.log(i);
}        //'a',1,true,{}
//array.keys()的迭代器对象
var iteractor2=arr.keys();
for(var i of iteractor2){
  console.log(i);
}        //0 1 2 3
//array.entries()的迭代器对象
var iteractor3=arr.entries();
for(var i of iteractor3){
  console.log(i);
} //[0,'a']   [1,1]   [2, true]   [3, {…}]


//Set
var s=new Set().add('a').add(1).add(true).add({});
for(var i of s){
  console.log(i);
}     //'a',1,true,{} 
//由于set保存的只是值，所以keys()和values()是一样的
//默认使用的是keys（）
var keys=s.keys();
for(var i of keys){
  console.log(i);
}      //'a',1,true,{}
//set的entries()遍历器对象
var entries=s.entries();
for(var i of keys){
  console.log(i);
}     //["a", "a"]     [1, 1]   [true, true]    [{…}, {…}]

//Map
var map=new Map().set('edition',6).set('commmit','TC39').set('standard','ECM-262');
for(var i of map){
  console.log(i);
}    //["edition", 6]   ["commmit", "TC39"]   ["standard", "ECM-262"]
//默认使用的是entries()的迭代器对象
//map的entries()迭代器对象
var iteractor1=map.entries();
for(var i of iteractor1){
  console.log(i);
}    //["edition", 6]   ["commmit", "TC39"]   ["standard", "ECM-262"]
//map的keys（）迭代器对象
var iteractor2=map.keys();
for(var i of iteractor2){
  console.log(i);
}     //"edition"   "commmit"   "standard"
//map的values迭代器对象
var iteractor3=map.values();
for(var i of iteractor3){
  console.log(i);
}     //6  "TC39"   "ECM-262"


//String
//string默认只有一个
var str='hello world';
for(var i of str){
  console.log(i)
}


//NodeList对象
var paras=document.querySelectorAll('p');
for(var p of paras){
  p.classList.add('test');
}


//Arguments对象
function f(){
  for(var i of arguments){
    console.log(i);
  }
}
f(1,'a',true,{});     //'a',1,true,{} 