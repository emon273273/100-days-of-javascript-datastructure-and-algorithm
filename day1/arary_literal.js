const names=["emon","leeman","khalid","alif","pabel"]


console.log(names.length) //5 dibe 


names[1]="emonsab"; //leeman chole jabe


console.log(names)


//amra chaile names[100] o korte pari


names[100]="shawn";

console.log(names) 
// 'emon',
//   'emonsab',
//   'khalid',
//   'alif',
//   'pabel',
//   <95 empty items>,
//   'shawn'


console.log(names.length)//101 dibe

//amra jodi amon hooy je index na jani mot koto and last a element add korte chai se khetre amake always  korte hbe names[namees.length]="shakib";

names[names.length]="shakib";

console.log(names)  //shawn er por shakib bose jabe

