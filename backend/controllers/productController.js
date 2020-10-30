const db = require('../db');

// @desc		Fetch all products
// @route 	GET /api/products
// @access 	Public
const getProducts = async (req, res) => {
  try {
    const products = await db.query('SELECT * FROM products');
    res.json(products.rows);
  } catch (error) {
    console.log(error);
  }
};

// @desc		Fetch single product
// @route 	GET /api/products/:id
// @access 	Public
const getProductById = async (req, res) => {
  try {
    const product = await db.query(
      `SELECT * FROM products WHERE id = ${req.params.id}`
    );
    res.json(product.rows[0]);
  } catch (error) {
    res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = {
  getProducts: getProducts,
  getProductById: getProductById,
};
