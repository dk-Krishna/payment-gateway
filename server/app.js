import express from "express";

// importing environment variables
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

const app = express();


export default app;