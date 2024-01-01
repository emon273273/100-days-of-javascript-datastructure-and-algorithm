const add=(a,b)=>{

    return a+b;
}

const sub=(a,b)=>a-b;

const div=(a,b)=>a/b;

const test=(a,b)=>add(a,b)/sub(a,b)


module.exports=test; // shudu test baire jasse ar kisu a


//->multiple exports
// module.exports={

//     test,
//     add
// }

console.log("this is math js file")


console.log(module)