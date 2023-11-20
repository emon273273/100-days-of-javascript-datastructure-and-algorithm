(function () {
    const people = require('./people');
    // setTimeout(() => {
    //     console.log('emon');
    // }, 1000);
    // console.log(global);
    console.log(__dirname);
    console.log(__filename);

        console.log(people.people)
        people.test()

  
})();


// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

console.log(lastName.length===lastNameLength)