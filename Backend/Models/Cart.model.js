const mongoose = require("mongoose");
const CartSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    products: [
      {
        productid: {type: String},
        category: {type: String},
        productdescription: {type: String},
        price: {type: Number},
        quantity: {type: Number, default: 1},
        item: {type: String},
        image: {type: String},
        name: {type: String},
        type: {type: String},
      },
    ],
  },
  {
    timestamps: true,
  }
);
const CartModel = mongoose.model("cart", CartSchema);

module.exports = {
  CartModel,
};
