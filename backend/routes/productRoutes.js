const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.route('/').get(controller.getProducts);
router.route('/:id').get(controller.getProductById);

module.exports = router;
