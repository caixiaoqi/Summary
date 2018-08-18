//reject返回一个带有拒绝原因reson参数的Promise对象。
Promise.reject(reason);
//reason表示Promise被拒绝的原因



Promise.reject('失败了').then(function(message){
  console.log('success')
},function(message){
  console.log(message)
})
console.log(111);
// 111  '失败了'