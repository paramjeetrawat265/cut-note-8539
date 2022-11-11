const {Router}=require("express")
const { ProductModel } = require("../../model/model.product")

const MensproductRouter=Router()

MensproductRouter.get("/get", async(req,res)=>{
    try{
        const data=await ProductModel.find({type:"men"})
res.send(data)
    }catch{
res.send({msg:"No data found"})
    }
})

module.exports={MensproductRouter}