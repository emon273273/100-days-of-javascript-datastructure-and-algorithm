const express = require("express");

const morgan = require("morgan");

const mongoose = require("mongoose");

// mongoose.connect()

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "welcome",
  });
});

const PORT = process.env.PORT || 8000;

// mongoose.connect(``)

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
