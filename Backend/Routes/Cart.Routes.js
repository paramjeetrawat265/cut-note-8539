const express = require("express");
const {authentication} = require("../Middleware/Authentication");
const {CartModel} = require("../Models/Cart.model");
const CartRoute = express.Router();

// ........ Add To Cart Functionality ..............
CartRoute.post("/addtocart", authentication, async (req, res) => {
  const {
    product_Id,
    user_id,
    category,
    image,
    item,
    name,
    price,
    type,
    quantity,
  } = req.body;

  let isavilable = await CartModel.findOne({user_id});
  // ........ check is user exist or not ..............
  if (isavilable) {
    let itemIndex = isavilable.products.findIndex(
      (p) => p.product_Id == product_Id
    );
    console.log(itemIndex);
    if (itemIndex > -1) {
      let productItem = isavilable.products[itemIndex];
      productItem.quantity = quantity;
      isavilable.products[itemIndex] = productItem;
    } else {
      isavilable.products.push({
        product_Id,
        user_id,
        category,
        image,
        item,
        name,
        price,
        type,
        quantity,
      });
    }
    isavilable = await isavilable.save();
    return res.status(201).send(isavilable);
  }
  // ........ If user Not exist Create New Cart ..............
  else {
    const newCart = await CartModel.create({
      user_id,
      products: [
        {
          user_id,
          category,
          image,
          item,
          name,
          price,
          type,
          quantity,
          product_Id,
        },
      ],
    });
    return res.status(201).send(newCart);
  }
});

// ........ Get User Cart Data ..............

CartRoute.get("/usercart", authentication, async (req, res) => {
  const {user_id} = req.body;
  try {
    const UserCart = await CartModel.findOne({user_id});
    if (UserCart) {
      res.send(UserCart);
    } else {
      res.send({msg: "Cart Is Empty Please Add Product To cart"});
    }
  } catch (err) {
    res.send({msg: "Something Wents Wrong", err: err});
  }
});

module.exports = {
  CartRoute,
};
