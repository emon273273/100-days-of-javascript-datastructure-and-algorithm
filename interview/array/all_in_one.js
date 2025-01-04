// // function frequencychar(str){

// // 	let ans={}

// // 	for (let char of str){

// // 		if(ans[char]){
// // 			ans[char]++;
// // 		}
// // 		else{

// // 			ans[char]=1
// // 		}
// // 	}
// // console.log()
// // 	return ans;
// // }

// // console.log(frequencychar("eem"))


// const number=[1,2,3,4,5,6]


// number.splice(3,3,100,200,300)

// console.log(number)



/// array destructure
const friend=["emon","khalid","pablel","tanzim"]


const [tanzim]=friend

console.log(tanzim)

// console.log(b)

// console.log(typeof(a))

// console.log(emon)

// console.log(k)

//object destructuring
// const obj={
// 	name:"emon",
// 	id:"201902009",
// 	tech:{
// 		skill:["pythn","js","css"]
// 	}
// }

// const {name,tech:{skill}}=obj
// console.log(name,skill)





// let first = "emon";
// let second = "sab";

// [second, first] = [first, second]; // This will work correctly

// console.log(first, second); // Output: sab emon
// rest 
const fruits = ['apple', 'orange', 'lemon', 'banana'];

const person = { name: 'john', lastName: 'smith', job: 'developer' };


// const [first,...rest]=fruits
// console.log(first,rest)

// console.log(typeof(rest))

// const specificfood=rest.find((f)=>f==="orange")

// console.log(specificfood)

//find index

const specificfoodindex=fruits.findIndex((item)=>item=="orange")
console.log(specificfoodindex)

// rest operatior

const newarr=[...fruits,...person.name]

console.log(newarr)


const maparray=fruits.map((item)=>{

	console.log(item.split())
})