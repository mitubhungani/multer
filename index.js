const express = require("express");
const dbConnect = require("./config/dbConnect");
const productRoute = require("./routes/product.route");
const path = require("path");

require("dotenv").config();
const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.use("/products", productRoute);

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log(`listn ${PORT}`);
  dbConnect();
});
