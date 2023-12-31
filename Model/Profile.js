const mongoose = require("mongoose");
const { Schema } = mongoose;

const AddressSchema = new Schema(
  {
    Village: {
      type: String,
    },
    Province: {
      type: String,
    },
    City: { type: String },
    ZipCode: { type: String },
  },
  { timestamps: true }
);

const ProfileSchema = new Schema(
  {
    CNIC: {
      type: String,
      required: true,
    },
    AccountType: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    PhoneNo: {
      type: Number,
    },
    ProfilePicture: {
      type: String,
    },
    Address: { type: AddressSchema },
  },
  { timestamps: true }
);

const ProfileModel = mongoose.model("profiles", ProfileSchema);
module.exports = ProfileModel;
