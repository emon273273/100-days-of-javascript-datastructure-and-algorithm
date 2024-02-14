// function wait(ms){
//  const promise=new Promise((resolve)=>{

// 	 setTimeout(resolve,ms);
//  })
// 	return promise;
// }


// wait(10).then(()=>{
// 	console.log("done1")
// })

// wait(5000).then(()=>{

// 	console.log("done2")
// })

//->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//aro easy way te

const wait=(ms)=>new Promise((resolve)=>{
	
	console.log("done") //eta normal hisebe print korbe  mane eta stack a jabe 
	setTimeout(resolve,ms)
	
})


wait(1000).then(()=>{

	console.log("done 1")
});
wait(2000).then(()=>{

	console.log("done 2")
});
wait(5000).then(()=>{

	console.log("done 3")
})


//nicher sob queue stack a jabe 