//删除成功返回true，删除失败返回false
var myMap = new Map();
myMap.set("bar", "foo");

myMap.delete("bar"); // 返回 true。成功地移除元素
myMap.has("bar");    // 返回 false。"bar" 元素将不再存在于 Map 实例中
