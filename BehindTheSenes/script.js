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

*/

console.log(this);

const calAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calAge(1991);

// Arrow function this keyword poinrs to the global scope

const calAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calAgeArrow(1980);
