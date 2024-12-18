// // # javascript কে সঠিক ভাবে ব্যাবহার পাট ০১


// // যদি আমরা let ব্যবহার করি:
// for (let j = 1; j < 5; j++) {
//     console.log(j);
// }
// console.log(j);
// // আপনি পাবেন 'Uncaught ReferenceError: j is not defined'
// // কারণ let দিয়ে ডিক্লেয়ার করা ভেরিয়েবলটি ব্লক স্কোপড, অর্থাৎ লুপের বাইরে এটি অ্যাক্সেসযোগ্য নয়।

// // আর  যদি আমরা var ব্যবহার করি:
// for (var j = 1; j < 5; j++) {
//     console.log(j);
// }
// // <-- ১ থেকে ৪ পর্যন্ত নম্বর লগ হবে
// console.log(j);
// //  এখানে আপনি ৫ পাবেন কারণ var দিয়ে ডিক্লেয়ার করা ভেরিয়েবলটি ফাংশন স্কোপড বা গ্লোবাল স্কোপে থাকে, তাই লুপের বাইরে এটি অ্যাক্সেসযোগ্য থাকে।

// //emon.cse273@gmail.com

//  //prototype way
// function Person(name) {
//     this.name = name;
//   }
//   Person.prototype.getName = function () {
//     return this.name;
//   }
//   const p = new Person('A');
//   console.log(p.getName()); // 'A'

// //new way 
//   class Person {
//     constructor(name) {
//       this.name = name;
//     }
//     getName() {
//       return this.name;
//     }
//   }
//   const p = new Person('A');
//   console.log(p.getName());



//   //


//   //->>>>>> Use up-to-date JavaScript ->>>>>

//   for (let j = 1; j < 5; j++) {
//     console.log(j);
//   }
//   console.log(j);
//   // you get 'Uncaught ReferenceError: j is not defined'
//   //If we did this using var:
//   for (var j = 1; j < 5; j++) {
//     console.log(j);
//   }
//   // <-- logs the numbers 1 to 4
//   console.log(j);
//   //You’d get 5 as it still exists outside the loop

//   //emon.cse273@gmail.com


//   class Person {
//     constructor(name) {
//       this._name = name; //  প্রাইভেট হিসেবে ব্যবহার করা হয়, কিন্তু এটি আসলে প্রাইভেট নয়
//     }
//     getName() {
//       return this._name;
//     }
//   }
//   const p = new Person('A');
//   console.log(p.getName()); // 'A'
//   console.log(p._name); // 'A' (এটি এখনো বাইরের থেকে অ্যাক্সেসযোগ্য)


  class Person {
    #name
    constructor(name) {
      this.#name = name;
    }
    getName() {
      return this.#name
    }
  }
  const p = new Person('A');
  console.log(p.getName()); // 'A'
  console.log(p.name) //undefined