import mongoose from "mongoose";

// creating a payment schema
const paymentSchema = new mongoose.Schema({
  razorpay_order_id: {
    type: String,
    required: true,
  },

  razorpay_payment_id: {
    type: String,
    required: true,
  },

  razorpay_signature: {
    type: String,
    required: true,
  },
});

// creating a model is like a collection
const Payment = new mongoose.model("payment", paymentSchema);

export default Payment;
