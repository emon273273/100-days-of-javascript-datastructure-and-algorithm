//we can store anything on the array

const arr=[10,"ten",true,{ten:10},[10,10]]

console.log(arr)
console.log(typeof(arr)) // object dibe

console.log("new topic")
const a=[

    {name:"emon",email:"emon@gmail.com"},
    {name:"khalid",email:"khalid@gmail.com"},
    {name:"shakib",email:"shakib@gmail.com"},
    {name:"adnan",email:"adnan@gmail.com"},

]


for(item in a){

    console.log(a[item].name)
}

// othoba chaile amra for of diye easily korte pari eta besi easy

console.log()
for(let i of a){

    console.log(i.name)
}