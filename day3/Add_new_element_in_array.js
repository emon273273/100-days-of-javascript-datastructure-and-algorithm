// how to add a element in the end

const arr=[1,2,3]

arr[arr.length]=4;
console.log(arr)

// othobar push method er madhome


arr.push(5);

console.log(arr) //[ 1, 2, 3, 4, 5 ]

// ekhon jodi arektar element ami chai add korte amar array te but element just tokhn ?

const arr1=[44,55]

arr.push(...arr1) // evabe korle arr1 er element sob chole jabe arr te

console.log(arr) //[1,  2,  3, 4,5, 44, 55]

//arekta way prototype er madhome

Array.prototype.push.apply(arr,arr1);

console.log(arr)  //[ 1,  2,  3,  4, 5, 44, 55, 44, 55 ]


// how to insert array in the begining


const a1=[5,6,7];

a1.unshift(1);

console.log(a1) //[ 1, 5, 6, 7 ]


//suppose amake first a full akta array jukto korte hbe

a2=[2,3,4];

a1.unshift(...a2);

console.log(a1) //[ 2, 3, 4, 1, 5, 6, 7 ]


//older way
a3=['q','r','s','t']

Array.prototype.unshift.apply(a1,a3);

console.log(a1) //[ 'q', 'r', 's', 't', 2, 3,   4,   1,   5,   6, 7 ][ 'q', 'r', 's', 't', 2, 3,   4,   1,   5,   6, 7 ]



//use splice to insert at the given  index

const newarray=[1,2,3,5,9];

// mone rakhbo splice array notun array create kore na . eta mutable way te kaj kore

newarray.splice(3,0,4) // 3 er por 4 add hbe

console.log(newarray) //[ 1, 2, 3, 4, 5, 9 ]

//suppose amar arekta array ase [6,7,8] eta ke new array te add korte chai 
const kk=[6,7,8];
newarray.splice(5,0,...kk);

console.log(newarray); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

