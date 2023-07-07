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

router.post("/add", VerifyToken, upload.single("file"), async (req, res) => {
  try {
    await ProductsModel.create({
      profileId: req.user.profileId,
      Image: req.file.path,
      Title: req.body.Title,
      Description: req.body.Description,
      Price: req.body.Price,
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
