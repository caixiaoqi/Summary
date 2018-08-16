new Map([iterable]);
//iterable可以是一个数组或者其他iterable对象。
//每个元素键值对都会被添加到新的Map。

//一个Map对象for of循环每次迭代的都是[key,value]数组

//键的相等是基于‘S啊么ValueZero’算法，即NaN是相等的，0和-0是相等的，其他按照===比较

//object和map虽然都保存键值对，但是还是有区别的
//1.object的键只能是字符串或者symbol，而map的键可以是任意值。
//2.map的键值对可以通过size属性获得，而object对象之恶能手动计算了
//3.map是可以迭代的，object是要手动