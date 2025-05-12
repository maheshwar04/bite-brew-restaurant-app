const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/auth');

/**
 * @swagger
 * /api/orders/create:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                     quantity:
 *                       type: integer
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post('/create', auth.protect, orderController.createOrder);

/**
 * @swagger
 * /api/orders/history:
 *   get:
 *     summary: Retrieve order history for the authenticated user
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   orderId:
 *                     type: string
 *                   products:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         productId:
 *                           type: string
 *                         quantity:
 *                           type: integer
 *                   total:
 *                     type: number
 *       401:
 *         description: Unauthorized
 */
router.get('/history', auth.protect, orderController.getOrderHistory);

/**
 * @swagger
 * /api/orders/by-date:
 *   get:
 *     summary: Retrieve orders made on a specific date
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: "The date to filter orders by (format: YYYY-MM-DD)"
 *     responses:
 *       200:
 *         description: A list of orders made on the specified date
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       orderId:
 *                         type: string
 *                         example: "663a3a2f083bb79b85e6aa7e"
 *                       products:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             productId:
 *                               type: string
 *                             name:
 *                               type: string
 *                             price:
 *                               type: number
 *                             quantity:
 *                               type: integer
 *                       total:
 *                         type: number
 *                         example: 249.99
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *       400:
 *         description: Missing or invalid date parameter
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get("/by-date", orderController.getOrdersByDate);

module.exports = router;
