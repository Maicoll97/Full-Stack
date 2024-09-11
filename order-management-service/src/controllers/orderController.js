const Order = require('../models/orderModel');

// Crear nuevo pedido
exports.createOrder = async (req, res) => {
    const order = new Order({
        products: req.body.products,
        total: req.body.total
    });
    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener todos los pedidos
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('products');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
