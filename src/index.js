const express =  require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const async = require("hbs/lib/async")
const collection=require("./mongodb")

const templatePath=path.join(__dirname,"../tempelates")
app.use(express.json)
app.set ("view engine","hbs")
app.set("views",templatePath)

app.get("/",(req,res)=>{
    res.render("login")
})
app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup",async(req,res)=>{
    const data={
    name:req.body.name,
    pawword:req.body.password
}
    await collection.insertMany([data])
    res.render("home")
})

app.listen(8000,()=>{
    console.log("Port connect");
})