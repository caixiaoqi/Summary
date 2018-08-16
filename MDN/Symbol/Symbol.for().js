Symbol.for(key);
//key是一个字符串，它会根据给定的键值key，来查找运行时的symbol注册表中对应的symbol
//如果悠久返回它，没有就新建一个，并放入symbol注册表中

var a=Symbol('foo');
var b=Symbol.for('foo');
a===b; //false
var c=Symbol.for('foo');
c===b;//true

//与Symbol（）不同的是，Symbol.for（）创建的symbol还会放入全局注册的注册表中
//Smbol.for() 并不是每次都会创建一个新的 symbol，它会首先检查给定的 key 是否已经在注册表中了。
//假如是，则会直接返回上次存储的那个。否则，它会再新建一个。


// 创建一个 symbol 并放入 Symbol 注册表，key 为 "foo"
var globalSym = Symbol.for("foo"); 
Symbol.keyFor(globalSym); // "foo"

// 创建一个 symbol，但不放入 symbol 注册表中
var localSym = Symbol(); 
Symbol.keyFor(localSym); // undefined，所以是找不到 key 的

// well-known symbol 们并不在 symbol 注册表中
Symbol.keyFor(Symbol.iterator) // undefined
