let a: number = 10;

console.log(a);

console.log("hello my name is emon");
let array: number[] = [1, 2, 3, 4, 5];

let array1: [number, string, number] = [1, "emon", 1];

array1.push(1);

console.log(array1);
//tuples are useful when two values like key-value pair

//enum

const enum Size {
  Small,
  Medium,
  Large,
}

let mysize: Size = Size.Small;
console.log(mysize);

//function

function calculatetax(a: number, taxyear: number): number {
  if (taxyear < 2020) {
    return a * 10;
  }
  return a;
}

calculatetax(10_00, 2020);

//object

type EmPloyee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let emloye: EmPloyee = {
  id: 1,
  name: "",
  retire(date: Date) {
    console.log(date);
  },
};

emloye.name = "emon";
emloye.retire(new Date());

let employee2: EmPloyee = {
  id: 2,
  name: "khalid",
  retire(date: Date) {
    console.log(date);
  },
};

//literal type

type quantity = 50 | 100;

let myquantiy: quantity = 50;

type metric = "cm" | "inch";

let hisab: metric = "cm";
