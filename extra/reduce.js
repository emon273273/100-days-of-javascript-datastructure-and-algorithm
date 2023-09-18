let arrnum=[15, 39, 20, 32, 30, 45, 22]
function sumofele(num,index){

return num+index;
}

let n=arrnum.reduce(sumofele);

console.log(n);
