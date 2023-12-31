const express = require("express");
const router = express.Router();
const multer = require("multer");
const ProductsModel = require("../Model/Products");
const VerifyToken = require("../Middlewear/VerifyToken");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    const name = new Date().getTime() + "-" + file.originalname;
    cb(null, name);
  },
});
const upload = multer({ storage: storage });

router.post("/", VerifyToken, async (req, res) => {
  try {
    const Products = await ProductsModel.find({
      profileId: req.user.profileId,
    });
    return res.status(200).json({ Products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/add", VerifyToken, upload.single("file"), async (req, res) => {
  try {
    const Data = JSON.parse(req.body.Data);
    await ProductsModel.create({
      profileId: req.user.profileId,
      Image: req.file.path,
      Title: Data.Title,
      Description: Data.Description,
      Price: Data.Price,
    });
    return res.status(200).json({ msg: "Product Added Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// router.get("/categories", async (req, res) => {
//   try {
//     const categories = await CategoryModel.find();
//     return res.status(200).json(categories);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// });
module.exports = router;
