//查看这个字符串是不是以指定字符串结尾的,返回一个布尔值
str.endsWith(searchStr,[,length]);
//length表示这个字符串是否截断，默认是str.length。

var str = "To be, or not to be, that is the question.";
str.endsWith('question.')  //true
str.endsWith('to be')  //false
str.endsWith('to be',19)  //true

//startsWith()一样的