const fs=require("fs")
const http=require("http")

const server=http.createServer((req,res)=>{


    fs.readFile('./index.html',(err,data)=>{

        if(err){

            console.log(err)
        }else{

            res.write(data);
            res.end()
        }


    })
})

server.listen(4000,()=>{

    console.log("server is running")
})