import express from "express";
const router = express.Router();
import Product from "../models/Product.js";

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    console.log("🚀 ~ router.get ~ products:", products)
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;