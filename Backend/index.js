const express=require("express");
const { connection } = require("./config/db");
const { AllProductRouter } = require("./Routes/Products/Allproducts.Rout");
const { MensproductRouter } = require("./Routes/Products/MensProducts.Routs");
var cors = require('cors')
const app=express();
app.use(express.json());
app.use(cors())
app.use("/mens",MensproductRouter)
app.use("/allproducts",AllProductRouter)


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