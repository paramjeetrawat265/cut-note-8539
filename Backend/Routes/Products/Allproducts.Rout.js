const {Router} = require("express");
const { ProductModel } = require("../../Models/Product.Models");

const AllProductRouter = Router();

AllProductRouter.get("/", async (req, res) => {
  const data = await ProductModel.find();
  res.send(data);
});

AllProductRouter.post("/post",async(req,res)=>{
    const {name,price}=req.body
    const data=new ProductModel({
        name,price
    })
    await data.save()
    if(data){
        res.send("yes")
    }else{
        res.send("no")
    }
  
})

AllProductRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const value = await ProductModel.findById(id);
    if (value) {
      res.send(value);
    } else {
      res.status(400).send({msg: "data is not available"});
    }
  } catch {
    res.send({msg: "Somenthing wents wrong please try  again"});
  }
});

module.exports = {AllProductRouter};
