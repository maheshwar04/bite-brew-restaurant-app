const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define your routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/users', userController.getAllUsers);

// Export the router
module.exports = router;
