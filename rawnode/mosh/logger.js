
const EvenHandling=require('events')

// const rs=new EvenHandling()

const url="https://www.youtube.com/watch?v=9Un1ldzoQbI&list=PLh-F6-XbduO9UUwLSg8QKKyD9wBvp3gfT";

class Logger extends EvenHandling{

     callurl(message){

        this.emit("event",{
            name:"emon",
            id:"201902009"
        });
        
    }
}




// module.exports.callurl=callurl;
module.exports=Logger