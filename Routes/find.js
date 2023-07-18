const express = require("express");
const { default: mongoose } = require("mongoose");
const ProductsModel = require("../Model/Products");

const router = express.Router();

//FIND ALL PRODUCTS FOR PLANT STORE PAGE
router.get("/products", async (req, res) => {
  try {
    const Products = await ProductsModel.find();
    return res.status(200).json({ Products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

//FETCH SINGLE PRODUCT DETAILS
router.get("/products/:id", async (req, res) => {
  try {
    const Product = await ProductsModel.findById(req.params.id);
    if (Product) {
      return res.status(200).json({ Product: Product });
    } else {
      return res.status(404).json({ error: "Product Not Found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
