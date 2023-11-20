const EventEmitter=require("events") //EventEmitter ekhane class

const emitter=new EventEmitter()

const file=require("fs")
//raise na event


//ex of use case suppose database theke data chole eseche abar os er memory kome gese esob hole event on korbe
emitter.on("bell",function(){

    data=file.readFileSync("./myfile.txt").toString()
    console.log(data)
    });


// a=11
// if(a===10){

//     emitter.emit("bell")
// }else{
//     console.log("not run")
// }

// setTimeout(() => {
//     emitter.emit("bell","secound preiod ended")
// }, 3000);

setTimeout(() => {
    emitter.emit("bell")
}, 3000);