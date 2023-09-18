//https:www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/


//for in loop

//The for...in loop iterates over the properties of an object. For each property, the code in the code block is executed.

const capitals = {
    a: "Athens",
    b: "Belgrade",
    c: "Cairo"
  };


  for(let key in capitals){

    console.log(key+" : "+capitals[key])
  }


  //Common Pitfall: Unexpected Behavior When Iterating Over an Array
// Though you can use a for...in loop to iterate over an array, it's recommended to use a regular for or for...of loop instead.


const a=[

    {name:"emon",email:"emon@gmail.com"},
    {name:"khalid",email:"khalid@gmail.com"},
    {name:"shakib",email:"shakib@gmail.com"},
    {name:"adnan",email:"adnan@gmail.com"},

]


//Q: shudhu email acess koro for in er madhome

for(let item in a)
{

    console.log(a[item].email)
}

console.log("new topic")
// for of loop

//The for...of loop iterates over the values of many types of iterables, including arrays, and special collection types like Set and Map. For each value in the iterable object, the code in the code block is executed.


const arr = [ "Fred", "Tom", "Bob" ];

for (let i of arr){

    console.log(i)
}
