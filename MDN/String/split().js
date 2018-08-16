str.split([separator,[, limit]])
//如果在字符串中找不到分隔符，或者省略了separator，那么返回的数组中就只有原字符串一个元素
//如果separator分隔符为“ ”，那么返回的是字符串数组
//spararor可以是正则表达式，也可以是字符串

'yuqi'.split('dada');   //["yuqi"]
'yuqi'.split();         //["yuqi"]
'yuqi'.split(' ');      //["y", "u", "q", "i"]