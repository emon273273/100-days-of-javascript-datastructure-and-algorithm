const express = require("express");
const morgan = require("morgan");
const app = express();

//middleware

// app.use(morgan('dev'));

//->make custom middleware

function custommiddleware(req, res, next) {
  console.log(req.url);

  if (req.url == "/about") {
    res.send("sorry not available now");
  }
  next();
}

function tinylogger() {
  return (req, res, next) => {
    console.log(`${req.method}- ${req.url}`);
    next();
  };
}

// app.use(custommiddleware);
//////////

const middleware = [custommiddleware, tinylogger()]; //ekon amra chaile app.use (middleware kore pass kore dite pari)

app.use(middleware);
//get method

app.get("/", (req, res) => {
  // res.send("<h1>Hello</h1>")

  res.json({
    message: "i am a response from your route handlear",
  });
});

app.get("/about", morgan("dev"), (req, res) => {
  res.send("this is about page");
});

//invalid route hole

app.get("*", (req, res) => {
  res.send("<h1>server not found");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on port${PORT}`);
});
