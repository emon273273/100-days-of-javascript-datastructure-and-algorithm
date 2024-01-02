const http=require('http')

const server=http.createServer((req,res)=>{
console.log(req.url)
res.end('<h1>hello emon</h1>');
})


server.listen(4000,()=>{

    console.log('server is running on 40000')

})

