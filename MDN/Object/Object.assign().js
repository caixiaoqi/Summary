Object.assign(target, ...sources)
//用于将sources中的所有自身的可枚举属性复制到目标对象
//如果目标对象与原对象有相同的键，那么属性将会被源中的属性覆盖。
//浅拷贝，同时拷贝字符串和symbol的属性
