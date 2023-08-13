
//array travarse

const arr=[1,2,3,4,5,100];

const n=arr[3];
const m=arr[2];

const x=1,y=0;

console.log(m,n,arr[x],arr[y]+arr[y],arr[x]+arr[y],arr[x+y+1]);

console.log("array travarse in loop")


let sum=0;
for(let i=0;i<arr.length;i++){
sum=sum+arr[i];

    console.log(arr[i]);
}

console.log("sum is",sum);


//find largest number from the aray

let largest_number=arr[0];

for(i=1;i<arr.length;i++){

    if(arr[i]>largest_number){
      largest_number=arr[i];

    }


}

console.log(largest_number) //100


//find minimum number
let smallest_number=arr[0];
for(let i=1;i<arr.length;i++){
if(arr[i]<smallest_number) smallest_number=arr[i];

}
console.log(smallest_number) //1
