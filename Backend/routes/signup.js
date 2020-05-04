const express=require('express')
const router=express.Router()
const client=require('../database')


router.get('/',(req,res)=>{
    res.send("End")
})



router.post('/',async(req,res)=>{
    
    //*************************************Mongo DB*******************************************************************//
    
    let email=req.body.email
    let {password}=req.body
    let validate=await client.db('user').collection('normal').findOne({email})
    delete req.body.password
    req.body._id=await client.db('user').collection('normal').find().count()
    console.log("Pasword hara ko!!")
    console.log(req.body)
        if(validate==null){
            let result=await client.db('user').collection('normal').insertOne(req.body)
            await client.db('user').collection('password').insertOne({password,_id:result.insertedId})
            console.log(result.insertedId)
            res.json({fname:req.body.fname,id:result.insertedId})
        }
        else{
            res.json({err:"There is already an account with email "+email})
        }
        
    

}).catch=(err)=>{
    console.log(err)
}


module.exports={router}