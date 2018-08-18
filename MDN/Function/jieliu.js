//如果一个事件被触发多次，节流函数可以按照固定的频率去触发
//函数防抖还是有缺点的，比如用户一直在滑动，那么事件将一直不触发

function throttle(fn,time){
  let _self=fn,
       timer,
       firstTime=true;

  return function(){
    var args=arguments;     //解决setTimeout执行的函数上下文丢失的问题。
    var _me=this;
    if(firstTime){        //如果是第一次，立即执行
      _self.apply(_me,args);
      return firstTime=false;
    }
    if(timer){            //如果定时器存在，说明有事件监听器在执行，直接返回
      return false;
    }   
    timer=setTimeout(function(){    //每过一段时间就触发一次
      clearTimeout(timer);
      timer=null;
      _self.apply(_me,args);
    },time)
  }


}


function foo(){
  console.log('you are scrolling');
}

window.onscroll=throttle(foo,500);

