require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const productRoutes = require("./routes/products");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);

  next();
});

app.use("/api/products", productRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Listening to PORT", process.env.PORT);
  });
});
