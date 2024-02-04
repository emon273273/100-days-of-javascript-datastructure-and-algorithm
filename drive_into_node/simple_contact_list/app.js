const express = require("express");
const bodyParser=require("body-parser")
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


//view engine

app.set('view engine','ejs');
////////




app.get('/',(req,res)=>{

    let post={

        title:"test title",
        body:" test body",
        published:true
    }



    let posts=[

        {title:"title 1",autor:"emon"},
        {title:"title 2",autor:"pabel"},
        {title:"title 3",autor:"shakib"},
        {title:"title 4",autor:"rakib"},
    ]
    res.render('pages/index',{title:"ejs is an awsome template engine",post,posts})
})

app.get("/about",(req,res)=>{


    res.render("pages/about");
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});


