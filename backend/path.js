const path=require('path')

const mycurrentpath=__filename;

console.log(mycurrentpath)

const mydirectory=__dirname

console.log(mydirectory)

//find file type

console.log(path.extname(mycurrentpath)) //.js dibe


//path obj


let pathobj={

    dir:"use/local",
    name:"emon",
    ext:".cpp"
}


console.log(path.format(pathobj))

//path ki absulute ki na

console.log(path.isAbsolute(mycurrentpath)) //true


