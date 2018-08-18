//直接绑定scroll事件是很错误的
function foo(){
  console.log('you are scrolling');
}
window.addEventListener('scroll',foo,false);



//我们可以设定一个时间，让这个时间在指定时间内只触发一次
function debounce(fn,delay){
  let timer=null;
  return function(){
    let context=this;
    let args=arguments;
    clearTimeout(timer);    //清除上一次
    timer=setTimeout(function(){    //重新计时
      fn.apply(context,args);
    },delay||500);
  }
}


window.addEventListener('scroll',debounce(foo,500));


