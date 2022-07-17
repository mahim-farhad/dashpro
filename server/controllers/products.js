const Product = require("../models/products");

const getProducts = async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 });

  res.status(200).json(products);
};

const createProduct = async (req, res) => {
  const { title, description, tool, size, category, quantity, price } =
    req.body;

  try {
    const product = await Product.create({
      title,
      description,
      tool,
      size,
      category,
      quantity,
      price,
    });

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getProducts, createProduct };
