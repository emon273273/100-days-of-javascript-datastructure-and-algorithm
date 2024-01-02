const fs = require("fs");

const testobj = {
  name: "Emon",

  email: "emon.cse273@gmail.com",
  address: "dhaka",
  country: "bangladesh",
};

const data = JSON.stringify(testobj);

console.log(data);

fs.writeFile("test.json", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file write sucessfully");
  }
});
