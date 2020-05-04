const {MongoClient}=require('mongodb')
const uri="mongodb+srv://ArpanGautam:Hackmeifyoucan1!@mflix-haero.mongodb.net/test?retryWrites=true&w=majority"
const client=new MongoClient(uri)
const main=async()=>{
    
    await client.connect()
    
    console.log("Connect bhayo!!")
    
  
}

main()
module.exports=client