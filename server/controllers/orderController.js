const Order = require("../models/OrdersModel");
const createError = require("http-errors");


module.exports = {

    addOrder: async (req, res, next) => {
        try {
            const products = req.body.basket;
            const price = req.body.price;
            const email = req.body.email;
            const address = req.body.address;
          
            const orderDetail = {
              products: products,
              price: price,
              address: address,
              email: email,
            };

            const newOrder = new Order(orderDetail);
            const savedOrder = await newOrder.save();

            res.status(201).json({
                message: "Order created successfully",
                order: savedOrder,
            });

            
        } catch (error) {
            next(error);
            
        }

    },
    getOrders: async (req, res, next) => {
        try {
            const orders = await Order.find();
            res.status(200).json({
                message: "Orders fetched successfully",
                orders: orders,
            });
        } catch (error) {
            next(error);
            
        }
    },

}
