

const arr=[10,2,8,4,1,6]


let target=8;



// for(let i=1;i<arr.length;i++){

//     if(arr[i]<temp){

//         arr[i]=arr[i-1];
//         arr[i]=temp;
//         temp=arr[i]
//     }
// }

arr.sort((a,b)=>a-b)



console.log(arr)

for(let i=0;i<arr.length;i++){

    temparr=[]
    let mid=arr.length/2;


    console.log(mid)
    if(arr[mid]==target){

        return arr[mid]
    }

    if(arr[mid]<target){

        
    }
}

// factorial



// function fact(n){
//      let result
//     if(n==1){

//         return result;
//     }

//      return result= fact(n*(n-1))

// }

// console.log(fact(5))


//price adjustment 

purchaseprices=[20,50,10,30]

 const purchaseprices2=[]
purchaseprices.map((item)=>{

    item=item+20;
 purchaseprices2.push(item)
})

console.log(purchaseprices2)


///summation obj



obj1={key:'a',value:10}

obj2={key:'b',value:20}
obj3={key:'c',value:30}


let sumobj=0;

totalobj=[obj1,obj2,obj3]
console.log(totalobj)

for( i of totalobj){

    sumobj=sumobj+i.value
    //console.log(i.value)
}

console.log(sumobj)