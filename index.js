const express = require("express");
const app = express();
var cors = require("cors");
const connect_to_db = require("./db");

// var cookieParser = require("cookie-parser");
const PORT = 8800;

app.listen(PORT, () => {
  console.log("the app is running at port " + PORT);
});

// Middlewears
connect_to_db();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

//Routes
app.use("/account", require("./Routes/auth/account"));
app.use("/products", require("./Routes/products"));
app.use("/find", require("./Routes/find"));
