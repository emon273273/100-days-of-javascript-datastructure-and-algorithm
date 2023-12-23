const Joi=require('joi')
const express=require("express")

const app=express();
app.use(express.json( ))


const courses=[

    {id:1,name:"course1"},
    {id:2,name:"course2"},
    {id:3,name:"course3"},
    {id:4,name:"course4"},
    {id:5,name:"course5"}
]

app.get("/",(req,res)=>{

  res.send("hello world");

})

app.get("/api/course",(req,res)=>{

    res.send(courses);

})

app.get("/api/course/:id",(req,res)=>{


   const course= courses.find(c=>c.id===parseInt(req.params.id))

   if(!course){

    res.status(404).send("this course no found")
   }
   res.send(course)
    
})


//post method


app.post("/api/courses",(req,res)=>{


    const schema={

        name:Joi.string().min(3).required()
    }

    const result=Joi.validate(req.body,schema)
    // console.log(result)

    // console.log(result)
if(result.error){

    res.status(400).send(result.error.details[0].message)
    return;
}
    const course={

        id:courses.length+1,
        name:req.body.name
    }

    courses.push(course)

    res.send(course)
})

const port=process.env.PORT || 3000
app.listen(port,()=>{

    console.log(`port is lisetening on port  ${port} `)
})