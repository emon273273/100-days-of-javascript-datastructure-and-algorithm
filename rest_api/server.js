const contactRoute=require("./api/routes/contact")
const express = require("express");
const app = express();

//middleware

app.use('/api/contacts',contactRoute);

//get

app.get("/", (req, res) => {
  res.send("hello");
});








//server listen
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app is running ${PORT}`);
});




//dummy data
const contacts=[
    {name:"emon",email:"emon.cse273@gmail.com"},
    {name:"pabel",email:"pabel.cse273@gmail.com"},
    {name:"arafat",email:"arafat.cse273@gmail.com"},
]