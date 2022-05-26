// Import express
const express = require("express");
// Import Product Controller

const { 
    getProducts,
    getProductId,
    createProducts,
    updateProducts,
    deleteProducts
 } = require ("../controllers/Product.js");
 
 // Init express router
const router = express.Router();
 
// Route get all products
router.get('/products', getProducts);
// Route get product by id
router.get('/products/:id', getProductId);
// Route create a new product
router.post('/products', createProducts);
// Route update product by id
router.put('/products', updateProducts);
// Route delete product by id
router.delete('/products', deleteProducts);
 
// export router
module.exports = router;