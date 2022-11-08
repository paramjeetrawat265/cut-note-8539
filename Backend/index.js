const express=require("express");
const { connection } = require("./config/db");
const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("HOme");
})

app.listen(process.env.PORT,async(req,res)=>{
    try{
        await connection;
        console.log("Connection Established");
    }
    catch(err){
        console.log("Connection Error");
        console.log(err);
    }
    console.log(`Listen at PORT ${process.env.PORT}`);
})