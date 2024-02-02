const express = require("express");
const morgan = require("morgan");
const userRouter = require("./userroute");
const postRouter = require("./postroute");
const app = express();

app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/posts", postRouter);

//extra just params ta janlam
app.get("/products/:productId", (req, res) => {
  console.log(req.params);
  let a = parseInt(req.params.productId);
  console.log(typeof a);
  if (!isNaN(a)) {
    res.send("i am listening" + req.params.productId);
  } else {
    res.send("please provid number");
  }
});

app.get("/", (req, res) => {
  console.log(req.query);

  let { catagory, shop, filter } = req.query;
  // res.send("hello this is home page");
  res.send(`catagory: ${catagory} and shop is ${shop} and filter is ${filter}`);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on port${PORT}`);
});
