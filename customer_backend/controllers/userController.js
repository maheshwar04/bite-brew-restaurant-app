const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const tokenBlacklist = require('../tokenBlacklist'); 
require('dotenv').config();
 
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
 
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
 
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
 
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
 
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
 
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find().select('-password'); // Exclude the password field
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

exports.logoutUser = (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // Assumes 'Bearer <token>'
    tokenBlacklist.add(token);
    res.status(200).json({ message: 'User logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Could not log out user' });
  }
};

  // Order history
  exports.getOrderHistory = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).populate('orders');
      res.json({ success: true, data: user.orders });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  // Order details
  exports.getOrderDetails = async (req, res) => {
    try {
      const order = await Order.findById(req.params.orderId);
      if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
      res.json({ success: true, data: order });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };