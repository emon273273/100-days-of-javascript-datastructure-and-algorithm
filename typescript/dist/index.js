"use strict";
let a = 10;
console.log(a);
console.log("hello my name is emon");
let array = [1, 2, 3, 4, 5];
let array1 = [1, "emon", 1];
array1.push(1);
console.log(array1);
;
let mysize = 0;
console.log(mysize);
function calculatetax(a, taxyear) {
    if (taxyear < 2020) {
        return a * 10;
    }
    return a;
}
calculatetax(1000, 2020);




let emloye = {
    id: 1, name: '',
    retire(date) {
        console.log(date);
    }
};
emloye.name = "emon";
emloye.retire(new Date());
