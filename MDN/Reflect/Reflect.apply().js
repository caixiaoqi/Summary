//通过此静态方法发起对目标函数的调用

Reflect.apply(target,thisArg,argumentList);

//target表示目标函数
//thisArg表示指定的this值
//argumentsList是target调用的时候传入的实参列表，是一个ArrayLike对象

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4