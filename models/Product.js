// import sequelize 
const Sequelize = require("sequelize");
// import connection 
const db = require("../config/database.js");
// const Category = require("./Category");
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Product = db.define('products', {
  // Define attributes
    // title: {
    //     type: DataTypes.STRING
    // },
    product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        // references: {
        //     model: Category,
        //     key: "category_id"
        // },
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    price: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: false,
    }
},{
  // Freeze Table Name
  freezeTableName: true
});
// Export model Product
module.exports = Product;
// export default Product;