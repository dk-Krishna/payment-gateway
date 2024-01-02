import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// importing routes
import paymentRoutes from "./routes/paymentRoutes.js";

// importing environment variables
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

const app = express();

// using middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// using routes
app.use("/api/v1", paymentRoutes);

// to send razorpay key to frontend
app.get("/api/v1/getkey", (req, res)=> {
  res.status(200).json({
    key: process.env.RAZORPAY_API_KEY
  });  
});

export default app;