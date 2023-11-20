const http=require("http");

const server=http.createServer((req,res)=>{

    if(req.url=="/"){
        res.write(" hello programmers")
        res.end()

    }if(req.url=='/about'){

        res.write("hello this is about page")
        res.end()
    }
    else{

        res.write("not found")
        res.end()
    }

});

server.listen(9000);

// server.on("connection",()=>{

//     console.log("new connection")
// })

console.log("server is liseting port 9000")

