const mongoose = require ("mongoose")

mongoose.connect("mongodb:/localhost:27017/otpless")
.then(()=>{
    console.log("Mongodb connected")
})

.catch(()=>{("failed to connect")})

const loginSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const collection= new mongoose.model("collection1",loginSchema)

module.exports=collection

