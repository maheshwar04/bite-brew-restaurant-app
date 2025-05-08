require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const tokenBlacklist = require('../tokenBlacklist'); // Adjust path as necessary

exports.protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no token' });
  }

  // Check if the token is blacklisted
  if (tokenBlacklist.has(token)) {
    return res.status(401).json({ success: false, message: 'Token has been logged out' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Not authorized, token failed' });
  }
};

