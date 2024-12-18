function fact(n){

  if(n==0){
    return 1;

  }else{
    return n*fact(n-1 )
  }
}

console.log(fact(5))


var x=10;
function dosomething(){
  var x=20;
  console.log(x)
}

dosomething();
console.log(x)


const numberArray=[1,2,3,4,5]
const filterarray=numberArray.filter((num)=>num%2==0)
const doubledArray=filterarray.map((num)=>num*2)

console.log(numberArray)
console.log(filterarray)
console.log(doubledArray)