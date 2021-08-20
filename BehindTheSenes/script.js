'use strict';

/**
function calAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //   const firstName = 'Munira';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
    }

    console.log(millenial);
  }

  printAge();
  return age;
}

const firstName = 'Ismail';
calAge(1991);


// Hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Ismail';
let job = 'teacher';
const year = 1994;

// Hoisting with functions
console.log(addDecl(4, 5));
// console.log(addEpr(4, 5));
// console.log(addArrow(4, 5));

function addDecl(a, b) {
  return a + b;
}

const addEpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);



console.log(this);

const calAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calAge(1991);

// Arrow function this keyword points to the global scope

const calAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calAgeArrow(1980);

const jonas = {
  year: 1991,
  calAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calAge();

const matilda = {
  year: 2017,
};

matilda.calAge = jonas.calAge;
//The above method is called method borrowing

matilda.calAge();

const f = jonas.calAge;
f();



// Regular function and arrow function
//var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // solution onw
    // const self = this; //self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //console.log(this.year >= 1981 && this.year <= 1996);
    //   //inside a regular function call the this function is undefined.
    // };

    //solution two
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      //console.log(this.year >= 1981 && this.year <= 1996);
      //inside a regular function call the this function is undefined.
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calAge();
//Never use an error method as a function

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5, 6, 8);

var addArrow = (a, b) => {
  console.log(arguments);
  a + b;
};

addArrow(2, 5, 6);

*/

//Premitive versus object reference
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('friend:', friend);
console.log('me', me);

//Primitive types
let lastName = 'Williams';
let oldlastName = lastName;
lastName = 'Davis';
console.log(lastName, oldlastName);

//Reference types
const jessica = {
  firstName: 'Jessics',
  lastName: 'Williams',
  age: 27,
};

const marriedjessica = jessica;
marriedjessica.lastName = 'davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedjessica);

//Copying objects
const jessica2 = {
  firstName: 'Jessics',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
//object.assign is a shallow copy.
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

//Learn how to create a deep clone
