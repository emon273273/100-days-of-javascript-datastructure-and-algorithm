const http=require("http")

const fs=require("fs")

const server=http.createServer((req,res)=>{

    if(req.url==='/data'){
        const myreaddata=fs.createReadStream(`${__dirname}/big_data.txt`);

        myreaddata.pipe(res);
       
        
    }

  
})

server.listen(8001);
console.log("server liseting on port 8000")