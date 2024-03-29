const express = require("express");
const bodyParser=require("body-parser")
const app = express();


const morgan = require("morgan");
const contactRoutes = require("./contactRoutes");
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use("/contacts", contactRoutes);

app.get("*", (req, res) => {
  res.send("<h1>please use correct routes</h1>");
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// ->Routes handles
//->Controller
//->Contact er object
