

//constructor pattern

const a1=new Array() //[] same but etao majhe majeh lage eta


console.log(a1,a1.length) //[]  0


const a2=new Array(5) // 5 ta elemnet niye toiri hobe initial vabe


console.log(a2,a2.length) //[ <5 empty items> ] 5


const a3=new Array(1,2,3,4,5)

console.log(a3,a3.length) //  [ 1, 2, 3, 4, 5 ] 5


//factory pattern


const b1=Array();

console.log(b1,b1.length) //[] 0

const b2=Array(5);
console.log(b2,b2.length) //[ <5 empty items> ] 5

const b3=Array(1,2,3,4,5)

console.log(b3,b3.length) //[ 1, 2, 3, 4, 5 ] 5


//factory pattern eo same kaj korse but new ta likha lagse na 

// dui way tei kaj kora jay situation depends


//check 
console.log(a1.__proto__.constructor)// main prototype hosse array [Function: Array]
console.log(b1.__proto__.constructor) //[Function: Array]

console.log(a1.__proto__.constructor===b1.__proto__.constructor); // return true



// mul kotha sob same tobe situation bujhe amader kaj korte hobe kokhon kont niye kaj korbo
