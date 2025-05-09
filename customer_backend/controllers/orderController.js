const axios = require('axios');
const Order = require('../models/orderModel');
const User = require('../models/userModel');

exports.createOrder = async (req, res) => {
  try {
    // Step 1: Communicate with Spring Boot product service
    const productServiceUrl = 'http://springboot-server-url/api/products';
    const productResponse = await axios.get(productServiceUrl);
    
    // Assuming productResponse.data contains the product details
    const products = productResponse.data;

    // Step 2: Simulate user selecting products
    // Ideally, you'd handle this with front-end logic where user selects products
    const selectedProducts = req.body.products; // Expecting selected products in request

    // Step 3: Create order and store in database
    const newOrder = await Order.create({
      user: req.user.id,
      products: selectedProducts,
      total: calculateTotal(selectedProducts) // Implement calculateTotal function
    });

    // Update user's order history
    await User.findByIdAndUpdate(req.user.id, {
      $push: { orders: newOrder._id }
    });

    res.status(201).json({ success: true, data: newOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getOrderHistory = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('orders');
    res.json({ success: true, data: user.orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Helper function to calculate total order price
function calculateTotal(products) {
  return products.reduce((total, product) => total + product.price, 0);
}