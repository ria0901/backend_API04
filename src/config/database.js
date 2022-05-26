// import { Sequelize } from "sequelize"

const { Sequelize } = require("sequelize");

const db = new Sequelize(
    "postgres://krytybeostpugt:a391f763dc72c837e66bb9e02d309b77dc4be1367b0a86cbecee57a000cc0bc5@ec2-34-201-95-176.compute-1.amazonaws.com:5432/d8ct5jf5mohgom",
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            }
        },
        logging: process.env.NODE_ENV === "production"? false : console.log
    },
)
module.exports = db;
// export default db;