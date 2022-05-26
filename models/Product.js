// import sequelize 
const Sequelize = require("sequelize");
// import connection 
const db = require("../config/database.js");
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Product = db.define('products', {
  // Define attributes
  title: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DOUBLE
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Product
module.exports = Product;
// export default Product;