//返回一个新的字符串,如果参数为负，会报错
'abc'.repeat(0)   //''
'abc'.repeat(1)   //'abc'
'abc'.repeat(-1)  //RangeError
'abc'.repeat(3.5) //count会被转换为整数 'abcabcabc'   
'abc'.repeat(0)