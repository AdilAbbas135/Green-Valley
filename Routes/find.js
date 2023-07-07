const express = require("express");
const { default: mongoose } = require("mongoose");
const ProductsModel = require("../Model/Products");

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const Products = await ProductsModel.find();
    return res.status(200).json({ Products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
