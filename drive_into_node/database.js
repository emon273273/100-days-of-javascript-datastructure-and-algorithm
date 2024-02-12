const express = require("express");

const morgan = require("morgan");

const mongoose = require("mongoose");

// mongoose.connect()

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//schema

let Schema = mongoose.Schema;

let testSchema = new Schema({
  name: String,
});


//model

let Test =mongoose.model('Test',testSchema)

app.get("/", (req, res) => {
  

    let test =new Test({

        name:"Mehorab Hossain Pabel"
    })

    test.save()
    .then(t=>{
        res.json(t)
    })
    .catch(e=>{
        console.log(e)
        res.status(500).json({

            error:"error occur"
        })
    })
});





//server


const PORT = process.env.PORT || 8081;

mongoose
  .connect("mongodb://localhost:27017/emon", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
