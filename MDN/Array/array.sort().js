//默认是根据字符的Unicode码点排序

//快排

function quickSort(arr){
  if(arr.length<=1){
    return arr;
  }
  var left=[],right=[];
  var index=Math.floor(arr.length/2);
  var indexValue=arr.splice(index,1)[0];
  arr.forEach(function(value){
    if(value<indexValue){
      left.push(value);
    }else{
      right.push(value);
    }
  })
  return quickSort(left).concat(indexValue,quickSort(right));
}
var test=[3,2,5,98,34,1,4,7,2]
quickSort(test);

//插入排序
function insertSort(arr){
  for(i=1;i<arr.length;i++){
    var temp=arr[i];
    for(var j=i;j>0&&arr[j-1]>temp;j--){
      arr[j]=arr[j-1];
    }
    arr[j]=temp;
  }
}
var test=[3,2,5,98,34,1,4,7,2]
insertSort(test)