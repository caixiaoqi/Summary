 //add返回的是Set对象本身
 
 var mySet=new Set();
 mySet.add(1);
 mySet.add('1').add(5).add('some text');
 console.log(mySet);   //Set(4) {1, "1", 5, "some text"}