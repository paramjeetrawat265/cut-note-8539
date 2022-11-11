const {Router}=require("express")
const { ProductModel } = require("../../model/model.product")

const AllProductRouter=Router()

AllProductRouter.get("/get",async(req,res)=>{
const data=await ProductModel.find()
res.send(data)

})




module.exports={AllProductRouter}