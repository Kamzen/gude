const express = require('express');

const router = express.Router();

const sellProductController = require('../../controllers/productController/sellProductController')
const getAllProductsController = require('../../controllers/productController/getAllProductsController')
const searchProductsController = require('../../controllers/productController/searchProductsController')

/*
    Routes Related To Selling A Product, Updating It, Deleting It,
 */

router.post('/sell', sellProductController)

/*
    Fetch All Products Route
 */
router.get('/', getAllProductsController)

/*
    Search Products Route
 */
router.post('/search', searchProductsController)

module.exports = router

