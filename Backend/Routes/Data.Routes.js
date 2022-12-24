const {Router} = require("express");
const {ProductModel} = require("../Models/Product.Models");
const DataRouter = Router();

// .........Get All Products Data.......................
DataRouter.get("/", async (req, res) => {
  const data = await ProductModel.find();
  res.send(data);
});

// .........Add Product in Database.......................

DataRouter.post("/add", async (req, res) => {
  const {name, price, discount, category} = req.body;
  const data = new ProductModel({
    name,
    price,
    discount,
    category,
  });
  await data.save();
  res.send(data);
});

// .........Get Mens Products Data.......................

DataRouter.get("/men", async (req, res) => {
  try {
    const mensdata = await ProductModel.find({type: "men"});
    if (mensdata) {
      res.status(200).send({msg: "Data Found", mensproducts: mensdata});
    }
  } catch {
    res.send({msg: "data not found"});
  }
});

// .........Get Womens Products Data.......................

DataRouter.get("/women", async (req, res) => {
  try {
    const womendata = await ProductModel.find({type: "women"});
    if (womendata) {
      res.status(200).send({msg: "Data Found", womenproducts: womendata});
    }
  } catch {
    res.send({msg: "data not found"});
  }
});

// .........Get Products by Search.......................

DataRouter.get("/search/:key", async (req, res) => {
  const data = await ProductModel.find({
    $or: [
      {type: {$regex: req.params.key}},
      {category: {$regex: req.params.key}},
    ],
  });
  if (data) {
    res.send(data);
  }
});

// .........Get Products By Accending order ......................

DataRouter.get("/price1/:asc", async (req, res) => {
  if ((req.params.asc = "asc")) {
    const data = await ProductModel.find().sort({price: 1});
    res.send(data);
  }
});

// .........Get  Products By dccending order.......................

DataRouter.get("/price/:dsc", async (req, res) => {
  if ((req.params.asc = "dsc")) {
    const data = await ProductModel.find().sort({price: -1});
    res.send(data);
  }
});

// .........Get  Seletcted Product.......................

DataRouter.get("/:id", async (req, res) => {
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

module.exports = {
  DataRouter,
};
