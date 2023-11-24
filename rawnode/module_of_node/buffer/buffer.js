//import file module

const fs=require("fs");
const { get } = require("http");

const getdata=fs.createReadStream(`${__dirname}/big_data.txt`) //locate my bigdata file
const writestream=fs.createWriteStream(`${__dirname}/output.txt`);
const pipewritestream=fs.createWriteStream(`${__dirname}/output_pipe.txt`)

//now call an event

getdata.on('data',(chunk)=>{

    writestream.write(chunk);

})

//->uporer ei kaj ta amra chaile pipe er madhome o korte pari 
getdata.pipe(pipewritestream); //event listener ta lagbe na



console.log("hello  node js is awsome") //print 