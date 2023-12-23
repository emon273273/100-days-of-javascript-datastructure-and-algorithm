//count character in the sentence using hashmap

let string="hello this is emon";

let arr=string.split('');

let hashmap={};

for(let i=0;i<arr.length;i++){

    if(!hashmap[arr[i]] && arr[i]!=""){

        hashmap[arr[i]]=1;
    }else{
        
        hashmap[arr[i]]+=1;
    }
}

console.log(hashmap)

//ans-
//{ h: 2, e: 2, l: 2, o: 2, ' ': 3, t: 1, i: 2, s: 2, m: 1, n: 1 }