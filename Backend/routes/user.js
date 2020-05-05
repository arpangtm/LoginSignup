//Signup Bhai Pachi
const router=require('express').Router()
const client=require('../database')



router.get('/:name/:id',async (req,res)=>{
    // console.log("K bhayo??")
    // console.log(req.params.id)
    // console.log("Users ko")
    // console.log(users.db)
    ///////////////////////////////MONGO DB SERCH FOR USER?/////////////////////////////////////////////////////
    console.log(parseInt(req.params.id,10))
    
    const bakra=await client.db('user').collection('normal').findOne({_id:parseInt(req.params.id,10)})
    console.log("bakra")
    console.log(bakra)
    res.json({bakra})

    
    
    
})

module.exports=router