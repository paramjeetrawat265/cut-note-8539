const mongoose=require("mongoose")


const ProductSchma=mongoose.Schema({
    id:{type:Number},
    type:{type:String},
    category:{type:String}
    ,name:{type:String},
    price:{String},
    item:{type:String},
})

const ProductModel=new mongoose.model("product",ProductSchma)

module.exports={ProductModel}