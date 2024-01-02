import express from "express";

// importing & using controllers 
import { checkout, paymentVerification, testingPayment } from "../controllers/paymentController.js";

const router = express.Router();

// testing api
router.route("/testingpayment").get(testingPayment);

router.route("/checkout").post(checkout);

router.route("/paymentverification").post(paymentVerification);

export default router;