const router=require('express').Router()
const client=require('../database')

router.post('/:field',async (req,res)=>{
    console.log("YO BODY HO!!")
    console.log(req.body)
    const body=req.body

    const keys=Object.keys(req.body)
    const value=Object.values(req.body)

    const param=req.params.field
    const set={}
    set[keys[0]]=value[0]
    console.log(set)
    await client.db('user').collection('normal').updateOne({_id:req.body._id},{$set:set
    })
})

module.exports= router