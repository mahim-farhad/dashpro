const express = require("express");

const { getProducts, createProduct } = require("../controllers/products");

const router = express.Router();

// routes
router.get("/", getProducts);

router.get("/:id", (req, res) => res.json({ msg: "Get a single product" }));

router.post("/", createProduct);

router.patch("/:id", (req, res) => res.json({ msg: "Update a product" }));

router.delete("/:id", (req, res) => res.json({ msg: "Delete a product" }));

module.exports = router;
