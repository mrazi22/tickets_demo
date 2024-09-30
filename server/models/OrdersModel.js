const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  price: Number,
  products: Array,
  email: String,
  address: Object,
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;

