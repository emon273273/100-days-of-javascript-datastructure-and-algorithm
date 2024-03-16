const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.post("/api/courses", (req, res) => {
  const course = {id:course.length+1};
});


const port=process.env.PORT || 3000
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
