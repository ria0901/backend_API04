// Import Product Model
const Product = require("../models/Product.js");
 
async function getProduct (_, res) {
    try {
        const product = await Product.findAll();
        res.send(product);
    } catch (err) {
        console.log(err);
    }
}
 
// Get product id
async function getProductId (req, res) {
    try {
        const product = await Product.findAll({
            where: {
                product_id: req.params.product_id
            }
        });
        res.send(product[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create a new product
async function createProduct (req, res)  {
    try {
        await Product.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update product 
async function updateProduct (req, res) {
    try {
        await Product.update(req.body, {
            where: {
                product_id: req.params.product_id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete product 
async function deleteProduct (req, res) {
    try {
        await Product.destroy({
            where: {
                product_id: req.params.product_id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getProduct,
    getProductId,
    createProduct,
    updateProduct,
    deleteProduct,
};