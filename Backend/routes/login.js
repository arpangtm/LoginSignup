const router=require('express').Router()
const client=require("../database")

router.post('/',async (req,res)=>{
    
    console.log("Backend login")
    let {email,password}=req.body
    let cur_user=await client.db('user').collection('normal').findOne({email})
    if(cur_user!=null){
        var cur_pass=await client.db('user').collection('password').findOne({_id:cur_user._id,password})
        console.log("--------------------------")
    console.log(cur_user)
    console.log(cur_pass)
    if(cur_pass!=null){
        res.json({cur_user})
    }else{
        res.json({err:"Email doesn't match with password"})
    }
    }else{
        res.json({err:req.body.email +" is not registered in our database!!"})
    }
    
    
})

module.exports=router