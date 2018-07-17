var  indexedDB=window.indexedDB;
var  dbName='person';
var  tableName='testTable';//实际上不是表，而是objectstore

function init(){
    //打开一个数据库，有这个数据库就打开，没有的话就新建次数据库
    onRequest=indexedDB.open(dbName);
    //当indexedDB被创建或版本号改变的时候，此事件触发，新建一个objectstore一般会对应版本号的更迭
    onRequest.onupgradeneeded=function(e){
      console.log("upgradeneeded is running");
      var thisDB=e.target.result;
      console.log(thisDB.version);
      if(!thisDB.objectStoreNames.contains(tableName)){
        console.log("I need to create the objectstore");
        //设置键路径
        var objectstore=thisDB.createObjectStore(tableName,{keyPath:"id",autoIncrement});
        //在创建表的时候，我们可以指定哪些字段是可以被索引的字段，Index取名的由来
        objectstore.createIndex("name","name",{unique:false});//unique说明这个指定索引的字段是不是唯一的
        objectstore.createIndex("phone","phone",{unique:false});
      }
    }

    onRequest.onsuccess=function(e){
      db=e.target.result;//得到这个数据库
      console.log(thisDB.version);
      db.onerror=function(event){
        alert("Database error:"+event.target.errorCode);
        console.dir(event.target);
      }
      if(thisDB.objectStoreNames.contains(tableName)){
        console.log("contains table"+tablename);
        //创建事务
        var transaction=db.transaction([tableName],'readwrite');
        transaction.oncomplete=function(event){
          console.log("All Done");
        }
        transaction.onerror=function(event){
          console.dir(event);
        }
         //在事务上通过指定objectstore的名称获得objectstore的访问权限
         //获得objectstore
        var objectStore=transaction.objectstore(tablename);
        //游标
        objectStore.openCursor().onsuccess=function(event){
          var cursor=event.target.result;
          if(cursor){
            console.log(cursor.key);
            console.log(cursor.value);
            lastCursor=cursor.key;
            cursor.continue();//下一条游标
          }else{
            console.log('Done with cursor');
          }
        }
        objectStore.add(addObject);
        objectstore.get(key);
        objectstore.delete(key);

      //IDBKeyRange为全局函数，创建IDBRange对象
      var boundKeyRange=IDBKeyRange.only(curName);
      objectStore.index('name').openCursor(boundKeyRange).omsuccess=function(event){
        var cursor=event.target.result;
        var rowData=cursor.value;
        cursor.continue();
      }
      }
    }
    //在window.indexedDB上删除指定的数据库，调用deleteDataBase
    indexedDB.deleteDatabase(dbName);

    
}