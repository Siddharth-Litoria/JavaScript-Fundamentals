//Object created using the regular object notation/syntax

var siddharth = { name: "Siddharth", profession: "Software Engineer" };

//Similar Object

var dj = { name: "Dj", profession: "Software Engineer" };

// Type:Person(name,profession)
// siddharth and dj are instances of this type

// Any function that defines a type or entity is called a constructor function
// 1. Name of the constructor function should start witha capital letter
// 2. when invoked use new operator.
function Person(name, profession) {
  //1. A new emty object is created and assigned to this inside function
  // this = {};

  //2.Function body executes and can modify this
  this.name = name;
  this.profession = profession;

  //3.The implicit this value is returned if no explicit non-primitive value is returned.
  //return this
}

var dev = new Person("dev", "SDE 1");

console.log(dev);

//Returning a non primitive value
// non-primitive : array, {} , () => {}

function Person1(name, profession) {
  //1. A new emty object is created and assigned to this inside function
  // this = {};

  //2.Function body executes and can modify this
  this.name = name;
  this.profession = profession;

  //3.The implicit this value is returned if no explicit non-primitive value is returned.
  // returning a non primitive value
  return [1, 2, 3];
}

var aman = Person1("Anamn", "SE1");
console.log(aman);

//Returning a primitive value
// primitive: 2, " " , false

function Person2(name, profession) {
  //1. A new emty object is created and assigned to this inside function
  // this = {};

  //2.Function body executes and can modify this
  this.name = name;
  this.profession = profession;

  //3.The implicit this value is returned if no explicit non-primitive value is returned.
  // returning a primitive value
  // anything apart from non primitive value returns implicit this
  return 2;
}

var karan = Person2("karan", "SE1");
console.log(karan);
