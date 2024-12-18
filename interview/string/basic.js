//TODO: Reverse string

const { count } = require("console");

function reversestring(str) {
  return str.split("").reverse().join("");
}

console.log(reversestring("emon"));

//TODO: check if string is palindome or not ?

function ispalindome(str) {
  return str == str.split("").reverse().join("");
}

console.log(ispalindome("eem"));

//Todo count the number of vowel in string

function vowelcount(str) {
  str = str.toLowerCase();
  arr = str.split("");
  console.log(arr);
  let count = 0;
  arr.map((val) => {
    if (val == "a" || val == "e" || val == "i" || val == "o" || val == "u") {
      count++;
    }
  });
  console.log(count);
}

function vowelcount2(str) {
  let vowel = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowel.includes(char)) count++;
  }
  console.log(count);
}

vowelcount("emonemOn");

vowelcount2("emonEMON");

//TODO: find the longest word in the sentence

function findLongestwordInArray(str) {
    let arr=str.split(" ")
    let longest=arr[0]
    for(let word of arr){
        if(word.length>longest.length) longest=word

    }

console.log(longest)

}

findLongestwordInArray("Hello my name is Emonsaheb")
