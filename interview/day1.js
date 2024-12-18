const { type } = require("os");

let primitiveTypes = [
  "string",
  "number",
  "null",
  "undefined",
  "boolean",
  "symbol",
  "bigint",
]; //this all are primitive data types
//==================================
//# undefined

/* undefined is the default value of a variable that has not been assigned a specific value*/

let un1;

console.log(un1); //undefined

const donothing = () => {};

console.log(donothing()); //undefined

const someObj = {
  a: "ay",
  b: "bee",
  c: "si",
};
console.log(someObj["b"]); //bee
console.log(someObj["d"]); //undefined

//->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Null

/**
 null is a value that represent no value

 In JavaScript, null is a special value that represents an empty or unknown value.
 */

let number = null;
console.log(number); //null

console.log(typeof null); //object type
console.log(typeof undefined); //undefined

//When comparing null and undefined we get true when using == and false when using ===. You can read the reason

console.log(null == undefined); //true
console.log(null === undefined); //false

//->>>>>>>>>>>>>>>>>>>>>>>>>>>

/*
In JavaScript, the && (logical AND) operator evaluates expressions from left to right and stops as soon as it encounters a falsy value (a value that is considered false in a Boolean context). If all values are truthy (considered true in a Boolean context), it returns the last value. Let's break down each example: */

console.log(false && 1 && []); // false

console.log(" " && true && 5); // logs 5

/*

The || or Logical OR operator finds the first truthy expression in its operands and returns it. This too employs short-circuiting to prevent unnecessary work. It was used before to initialize default parameter values IN functions before ES6 Default function parameters was supported.
*/

console.log(false || null || 1); // 1
function logname(name) {
  let n = name || "emon";
  console.log(n);
}

logname(); //emon
