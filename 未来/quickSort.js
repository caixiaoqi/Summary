//快排
function quickSort(arr){
  if(arr.length<=1){
    return arr;
  }
  //找基准，并将基准从数组中删除
  var index=Math.floor(arr.length/2);
  var indexValue=arr.splice(index,1)[0];
  //定义数组
  var left=[],right=[];
  for(var i=0;i<arr.length;i++){
    if(arr[i]<indexValue){
      left.push(arr[i]);
    }
    else{
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(indexValue,quickSort(right));
}



//插入排序
function insertSort(arr){
  for(var i=1;i<arr.length;i++){
    var temp=arr[i];
    for(var j=i;j>0&&a[j-1]>temp;j--){
      a[j]=a[j-1];
    }
    a[j]=temp;
  }
}



//选择排序
function selectSort(arr){
  for(var i=0;i<arr.length;i++){
    var index=i;
    for(var j=i+1;j<arr.length;j++){
      if(arr[index]>arr[j]){
        index=j;
      }
    }
    if(index!=i){
      var temp=arr[i];
      arr[i]=arr[index];
      arr[index]=temp;
    }
  }
}