const axios = require("axios");
const Order = require("../models/orderModel");
const User = require("../models/userModel");

exports.createOrder = async (req, res) => {
  try {
    const selectedProducts = req.body.products; // [{ productId, quantity }]

    if (!selectedProducts || selectedProducts.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No products provided." });
    }

    // Fetch all product details from product-service
    const productServiceUrl = "http://localhost:8081/api/products";
    const response = await axios.get(productServiceUrl);
    const allProducts = response.data;
    console.log(response.data);

    // Match and map product details
    const orderProducts = selectedProducts.map((item) => {
      const matchedProduct = allProducts.find(
        (p) =>
          String(p.productId) === String(item.productId) ||
          String(p._productId) === String(item.productId)
      );
      if (!matchedProduct)
        throw new Error(`Product with ID ${item.productId} not found`);

      return {
        productId: matchedProduct.productId,
        name: matchedProduct.name,
        price: matchedProduct.price,
        imageUrl: matchedProduct.imageUrl || "",
        quantity: item.quantity,
      };
    });

    const total = calculateTotal(orderProducts);

    const newOrder = await Order.create({
      user: req.user.id,
      products: orderProducts,
      total,
    });

    await User.findByIdAndUpdate(req.user.id, {
      $push: { orders: newOrder._id },
    });

    res.status(201).json({ success: true, data: newOrder });
  } catch (error) {
    console.error("Order creation failed:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getOrderHistory = async (req, res) => {
  try {
    console.log(req.user.id);
    const user = await User.findById(req.user.id).populate("orders");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const formattedOrders = user.orders.map((order) => ({
      orderId: order._id,
      products: order.products,
      total: order.total,
      createdAt: order.createdAt,
    }));

    res.status(200).json({ success: true, data: formattedOrders });
  } catch (error) {
    console.error("Fetching order history failed:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Could not fetch orders." });
  }
};

exports.getOrdersByDate = async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ success: false, message: "Date is required." });
    }

    const start = new Date(date);
    const end = new Date(date);
    end.setDate(end.getDate() + 1); // Next day for range

    const orders = await Order.find({
      createdAt: {
        $gte: start,
        $lt: end,
      },
    });

    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    console.error("Error fetching orders by date:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Helper to calculate total price
function calculateTotal(products) {
  return products.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );
}
