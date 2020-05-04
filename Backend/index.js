var express=require('express')
var app=express()
const router=express.Router()
var bodyParser=require("body-parser")
const cors=require('cors')
const homeroute=require('./routes/home')
const signuproute=require('./routes/signup')
const userroute=require('./routes/user')
const loginroute=require('./routes/login')
const updateroute=require('./routes/update')

app.use(cors())

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use('/signup',signuproute.router)
app.use('/user',userroute)
app.use('/login',loginroute)
app.use('/update',updateroute)
// app.use('/',homeroute)


app.listen(3300,()=>console.log("Port 3300"))