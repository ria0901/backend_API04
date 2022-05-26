// Import express
const express = require("express");
// Import Product Controller

const { 
    getProduct,
    getProductId,
    createProduct,
    updateProduct,
    deleteProduct
 } = require ("../controllers/Product.js");
 
 // Init express router
const router = express.Router();
 
// Route get all products
router.get('/product', getProduct);
// Route get product by id
router.get('/product/:product_id', getProductId);
// Route create a new product
router.post('/product', createProduct);
// Route update product by id
router.put('/product/:product_id', updateProduct);
// Route delete product by id
router.delete('/product/:product_id', deleteProduct);
 
// export router
module.exports = router;