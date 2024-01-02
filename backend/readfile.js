const fs = require("fs");

fs.readFile("./test.json", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.parse(data));
  }
});
