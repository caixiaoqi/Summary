function Animal(name){
  this.name=name||'Animal';
  this.sleep=function(){
    console.log(this.name+'are sleeping');
  }
}


//1.原型链的继承
//缺点很明显，来自原型对象的引用属性是所有实例共享的，创建子类实例的时候，无法向父类传参
function Cat(){}
Cat.prototype=new Animal();
Cat.prototype.name='cat';
var cat=new Cat();

//2.构造函数借用
//可以向父类构造函数传参了，但是子类的实例不再instanceOf父类了，
//无法继承父类的prototye的属性和方法
//如法实现函数复用
function Cat(name){
  Animal.call(this);
  this.name=name||'Tom';
}

//3.实例继承
function Cat(name){
  var instance=new Animal();
  instance.name=name||'Tom';
  return instance;
}
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true
console.log(cat instanceof Cat); // false