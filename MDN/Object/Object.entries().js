//返回一个对象的键值对数组,是自身的可枚举属性
//返回的是数组，而不是iterable迭代器对象
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
