function getURL(url,obj){
  var arr=[];
  for(var key in obj){
    if(!obj.hasOwnProperty(key))  continue;
    else if(typeof obj[key]==='function') continue;
    var realKey=encodeURIComponent(key);
    var value=encodeURIComponent(obj[key]);
    arr.push(realKey+'='+value);
  }
  var str=arr.join('&');
  if(url.indexOf('?')===-1){
    return url+'?'+str;
  }else{
    return url+'&'+str;
  }
}

var obj={
  'name':'yu=qi',
  'id':'1654 50'
}

getURL('http://www.baidu.com?sprit=kk',obj);