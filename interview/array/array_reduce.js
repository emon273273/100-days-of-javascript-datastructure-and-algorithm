console.log("emon")

const arr=[15, 16, 17, 18, 19];

function sum(acc,curr){

    return acc=acc+curr;
}

console.log(arr.reduce(sum,10))