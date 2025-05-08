const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [
    {
      type: Object,
      required: true
    }
  ],
  total: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Order', orderSchema);
