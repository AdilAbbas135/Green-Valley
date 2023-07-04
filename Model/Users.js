const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  email: { type: String, required: true },
  Password: { type: String, required: true },
  CNIC: { type: String, required: true },
  AccountType: { type: String, required: true },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
