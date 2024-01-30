// // ES6 & ES7 Classes and superclasses.
// class Human {
//     // ES7 syntax does not require 'this' keyword anymore.
//     // this.gender = 'male';  
//     gender = "male";
    
//     printGender = () => {
//         console.log(this.gender);
//     }
//   }
  
// class myPerson extends Human {
//     name = 'Max';  

//     printMyName = () => {
//         console.log(this.name)
//     }
// }
  
// const person = new myPerson();
// person.printMyName();
// person.printGender();

// SPREAD & REST operators.
// ... - Spread & Rest operator
// Rest to create an array of elements and spread is passing elements
// into the function as an arrays.
// const person = {
//     name: 'Philip'
// };

// const newPerson = {
//     ... person,
//     age: 24
// };

// const filter = (...args) => {
//     return args.filter(el => el === 1)
// }

// console.log(filter(1, 2, 3));
// console.log(newPerson);;

// Array Destructuring & Object Destructuring
// const numbers = [1, 2, 3];
// [num1, ,num3] = numbers;
// console.log(num1, num3)

// const person = {
//     name: 'Philip',
//     age: 24,
//     citizenship: Belarus
// };

// Primitive & Reference types
// Booleans, numbers & strings - primitive types.
// Arrays & Objects reference types. 
// Here the pointer to the reference person is stored.
// const person = {
//     name: "Philip"
// };

// // Changed the name of the person object. 
// // Though "person" is a constant properties of it can be changed.
// person.name = "Philips"

// // Second person is reference type with the pointer assigned to the person
// // const secondPerson = person;

// // Spread operator allows to create an exact copy of an object.
// const secondPerson = {...person};

// console.log(secondPerson.name)

// Refreshing array functions.
const numbers = [1, 2, 3];
const doubledNumArr = numbers.map(num => num * 2);
console.log(doubledNumArr);