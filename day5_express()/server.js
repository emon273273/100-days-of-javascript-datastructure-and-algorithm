const express=require ("express")

const app=express();

// app.use(express.json());
// app.use(express.raw())

// app.use(express.text())

//static public folder er content acess
app.use(express.static(`${__dirname}/public/`,{
    index:"home.html"
}))

//http://localhost:3000/test/test.txt

app.get("/",(req,res)=>{

    res.send("this is home page");
})

//post method

app.post("/",(req,res)=>{

    console.log(req.body);
    res.send("post sucessfully")
})

//for static hit

app.get("/static",(req,res)=>{

    res.send("")
})
app.listen(3000,()=>{

  console.log("listening at 3000")  
})
