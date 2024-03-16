const express=require ("express")
const router=express.Router()


//GET

router.get('/',(req,res,next)=>{

    res.status(200).json({
        messsage:"hello i am all contacts get route"
    })
})

router.get("/:id",(req,res,next)=>{
const id=req.params.id
    console.log(req.url);

    res.json({
        message:" i am a single contact" 
    })
})

//post

router.post("/:id",(req,res,next)=>{

    res.status(201).json({

        message:"hello i am post Route"
    })
})

//put
router.put("/:id",(req,res,next)=>{
    const id=req.params.id
        console.log(req.url);
    
        res.json({
            message:" i am a put route"
        })
    })

    //delete
    router.delete("/:id",(req,res,next)=>{
        const id=req.params.id
            console.log(req.url);
        
            res.json({
                message:" i am a delete route"
            })
        })


module.exports=router;