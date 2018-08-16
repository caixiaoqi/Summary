//symbol()只能通过symbol（）创建，前面不能加new。
var symbol1=Symbol();     //成功了
var symbol2=new Symbol(); //抛出错误TypeError

//symbol的唯一的目的就是作为对象属性的标识符。

Symbol([description])
//description可选，它是对symol的描述，可用于调试但是不能用于访问symbol本身。

var sym1 = Symbol();
var sym2 = Symbol('foo');
var sym3 = Symbol('foo');
sym2===sym3;//false
Symbol('foo')===Symbol('foo');//false

//Object.getOwnPropertyNames()这个方法不会查询到symbol的属性，也不会被for in遍历到
Object.getOwnPropertySymbols();