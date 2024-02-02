const express = require("express");

const app = express();

//get method

app.get("/", (req, res) => {
  // res.send("<h1>Hello</h1>")

  res.json({
    message: "i am a response from your route handlear",
  });
});

app.get("/about:id", (req, res) => {
  res.send(req, params.id);
});

//invalid route hole

app.get("*", (req, res) => {
  res.send("<h1>server not found");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on port${PORT}`);
});
