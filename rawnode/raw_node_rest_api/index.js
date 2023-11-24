const http = require("http");

const url=require("url")

//app object

const app = {};

//config

app.config = {
  port: 3000,
};

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

//handle request response

app.handleReqRes = (req, res) => {

    //request handling

    //get the url and parse it

    const parseUrl=url.parse(req.url,true)

const path=parseUrl.pathname
const trimmedpath=path.replace(/^\/+|\/+$/g,'')
console.log(trimmedpath) //last er kono alada path extara thakle remove kore felbo
 
const method=req.method.toLowerCase();



    //response handle
  res.end("hello this is ");
};

// console.log(app)
//start the server

app.createServer();
