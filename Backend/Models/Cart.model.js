const mongoose = require("mongoose");
const CartSchema = mongoose.Schema({
    userid:{ type: String },
    productid:{ type: String },
    category: { type: String },
    productdescription: { type: String },
    price: { type: Number },
    quantity: { type: Number ,default:1},
    item: { type: String },
    image: { type: String },
    filename: { type: String },
    type:{type:String}
}, {
    timestamps: true
})
const CartModel = mongoose.model("cart", CartSchema);

module.exports = {
    CartModel
}


