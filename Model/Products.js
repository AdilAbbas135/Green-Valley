const mongoose = require("mongoose");
const { Schema } = mongoose;
const ProductsSchema = new Schema(
  {
    profileId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    Image: {
      type: String,
    },
    Title: {
      type: String,
    },
    Description: { type: String },
    Price: { type: Number },
  },
  { timestamps: true }
);
const ProductsModel = mongoose.model("products", ProductsSchema);
module.exports = ProductsModel;
