//替换
//str.replace(regexp|substr, newSubStr|function)
//可以是字符串，也可以是RegExp。
//如果是字符串  不会  转换成正则表达式，值替换匹配的第一个

//function(replcement) 一个用来创建字符串的函数，改函数的返回值将替换第一个参数匹配的结果


//交换字符串中的两个单词
var re=/(\w+)\s(\w+)/;
var str='John Smith';
str.replace(re,'$2,$1');  //"Smith,John"


//替换引号
var re=/"([^"]*)"/;
var str='John "Smith"';
str.replace(re,"'$1'")  //"John 'Smith'"

var reg=/(['"])[^\1]*\1/;    

var str='13839771512';
str.replace(/(\d{3})(\d{4})(\d{4})/,'$1-$2-$3')//"138-3977-1512"

//将大写字母转换为-小写字母
var str='fontSize'
function replace(match){
  return '-'+match.toLowerCase();
}
str.replace(/[A-Z]/g,replace);//"font-size"


//match就是匹配到的字符串，p1、p2、p3都是匹配的子串
//函数的返回值替换原来的字符串
function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);  // abc - 12345 - #$*%

//去空白
' yuqi '.replace(/(^\s*)|(\s*$)/g,"");//g不要忘了
