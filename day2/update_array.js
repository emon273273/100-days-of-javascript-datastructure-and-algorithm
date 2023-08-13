const arr1=new Array(10);

console.log(arr1) //<10 empty items>

//uporer cell ta adress jayga nisese empty hisebe


for(let i=0;i<arr1.length;i++){

    arr1[i]=false;
}

console.log(arr1) //sob false diye update 



//method use kore ami array te element fill korte pari

const arr2=new Array(10);

arr2.fill(0) //
 console.log(arr2) 
//[
//     0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0
//   ]


const names=["emon","leeman","alex","kamrul"];

names[0]=false;

console.log(names) //[ false, 'leeman', 'alex', 'kamrul' ]


//update last element in "shakib"

names[names.length]="shakib";

console.log(names);

const response=new Array(10);

response.fill(false);

//random  diye fill

for(let i=0;i<response.length;i++){

    const rand=Math.floor(Math.random()*10+1);

    response[i]=rand>5?'x':'o'
}

console.log(response)


//array is mutable

function update(arr){

    for(let i=0;i<names.length;i++){

        arr[i]=`${i+1}.${arr[i]}`
    }


}


update(names);

console.log(names) //[ '1.false', '2.leeman', '3.alex', '4.kamrul', '5.shakib' ]


//dekha jasse amra array ta ke change korte parsi that means amra array ke anytime element gulo ke change korte pari easily

