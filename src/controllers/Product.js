// Import Product Model
const Product = require("../models/Product.js");
 
async function getProducts (req, res) {
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
                id: req.params.id
            }
        });
        res.send(product[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create a new product
async function createProducts (req, res)  {
    try {
        await Product.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update product id
async function updateProducts (req, res) {
    try {
        await Product.update(req.body);
        res.json({
            "message": "Product Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete product id
async function deleteProducts (req, res) {
    try {
        await Product.destroy(req.body);
        res.json({
            "message": "Product Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getProducts,
    getProductId,
    createProducts,
    updateProducts,
    deleteProducts,
};