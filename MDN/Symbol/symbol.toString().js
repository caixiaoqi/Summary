Symbol("foo") + "bar";      
// TypeError: Can't convert symbol to string
Symbol("foo").toString() + "bar"
// "Symbol(foo)bar"，就相当于下面的:
Object(Symbol("foo")).toString() + "bar"
// "Symbol(foo)bar"

//symbol原始值不能转换为字符串，只能先转换为他的包装对象，然后在调用toString（）方法