// Things to cover
// basic syntax

// variables
// Declaring Variables and their use case.

// Declaring variable using var: Var doesnt catch error if there is a variable change.
// var time = 'morning';

// Declaring variables with let: Let catch errors if there is a variable change.
let time = "morning";

// There are key differences in using let, var and const
// Find out about the naming convention in JS
// Naming convention in JS is camelCase

// Declaring Variable with time
const myTime = "afternoon";
// when you declare an assigment to a const variable, It cannot be changed.

// operators
// comparison Operator: ==  === >  >=  < <= != !==
const number = 10;
const anotherNumber = "10";
console.log(number != anotherNumber); // true
console.log(number !== anotherNumber); // false

// logical operator
// && || !
// && - and operator, || - or operator, ! - not operator
console.log(5 !== 7 || 5 === 6 || 17 <= 7 || 5 == 5);

// conditions ==> making decisions
// if if-else else-if

// loops ==> repetition for, while, do-while, for-each
const users = ["Tochukwu", "Dora", "Ninte", "Precious"];
for (let i = 0; i < users.length; i++) {
  console.log("Good Morning" + users[i]);
}

// function declaration ==> reuseable block of code
function greet() {
  const users = ["Tochukwu", "Dora", "Ninte", "Precious"];
  for (let i = 0; i < users.length; i++) {
    console.log("Good Morning, " + users[i]);
  }
}

greet();
// functions can take arguments
function greet(name) {
    for (let i = 0; i < name.length; i++) {
        console.log("Good Morning, " + name[i]);
    }
}

greet(['Victoria', 'Isaac', 'Samson', 'Temitope', 'Elijah'])

function multiplicationTable(number, limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

multiplicationTable(3,24);