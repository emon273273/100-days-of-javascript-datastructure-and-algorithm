const fs=require("fs")

const getdata=fs.createReadStream(`${__dirname}/big_data.txt`)



getdata.on('data',(chunk)=>{
console.log(chunk)

})


console.log("hello")