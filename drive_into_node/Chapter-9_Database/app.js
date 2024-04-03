const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
//middlware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let Schema = mongoose.Schema;

let testSchema = new Schema({
  name: String,
});

let Test = mongoose.model("Test", testSchema);

app.get("/", (req, res) => {
  let test = new Test({
    name: "emon sab",
  });

  test
    .save()
    .then((t) => {
      res.json(t);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({

        error:"error occured"
      })
    });
});

const PORT = process.env.PORT || 8080;

mongoose
  .connect(
    `mongodb+srv://emon273:2010123456em@cluster0.2jhyhgd.mongodb.net/simple_contact`,
    {
      usenewUrlParser: true,
    }
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on Port${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
