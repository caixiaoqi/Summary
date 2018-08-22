//splice()方法删除现有元素，或者添加元素来修改现有数组
//返回被删除的元素组成的数组，如果是添加元素，则返回空数组[]
//原数组也会改变

var myFish = ["angel", "clown", "mandarin", "surgeon"]; 
//从第 2 位开始删除 0 个元素，插入 "drum" 
var removed = myFish.splice(2, 0, "drum"); 
//运算后的 myFish:["angel", "clown", "drum", "mandarin", "surgeon"] 
//返回[]

var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);
//运算后的myFish：["angel", "clown", "drum", "sturgeon"]
//被删除元素数组：["mandarin"]

