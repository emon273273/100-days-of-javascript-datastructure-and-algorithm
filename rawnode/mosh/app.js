const EvenHandling=require('events')

const rs=new EvenHandling()





const Logger=require('./logger')

const logger =new Logger();



logger.on("event",(arg)=>{

    console.log(`name is ${arg.name} and id is ${arg.id}`)
})
logger.callurl();
