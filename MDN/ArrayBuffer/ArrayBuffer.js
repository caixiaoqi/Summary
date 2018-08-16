//ArrayBuffer对象表示通用的、固定长度的原始二进制数据缓冲区。
//ArrayBuffer不能直接操作，要通过类型数组对象或者DateView对象来操作，
//他们会将缓存区中的数据表示为特定的格式，并通过这些格式来读写缓存区的内容

var buffer=new ArrayBuffer(8);
//create a ArrayBuffer with 8 byte
console.log(buffer.byteLength);  //只读，不可写
//byteLength表示一个ArrayBuffer对象的字节长度

buffer.slice(5,7);
//slice返回一个新的ArrayBuffer对象，包括开头，不包括结尾。