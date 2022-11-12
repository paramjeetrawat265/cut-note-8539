const {Router}=require("express")
const { ProductModel } = require("../../model/model.product")

const AllProductRouter=Router()

AllProductRouter.get("/get",async(req,res)=>{
const data=await ProductModel.find()
res.send(data)
})


// GetMensProductRouter.post("/add",async(req,res)=>{
//     const {title,id}=req.body
//     const products=new ProductModel({
//         title,id
//     })
// await products.save()
// res.send("yes")
// })

module.exports={AllProductRouter}