const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require("./routes");
const app = express();
//middlware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/contacts", router);
// setup ejs
app.set('view engine','ejs')
app.get("/", (req, res) => {

  res.send("hello")
});

const PORT = process.env.PORT || 8081;

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
