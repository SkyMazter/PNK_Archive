import mysql from "mysql";
import { Sequelize } from "sequelize";
import "dotenv/config";

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the sql server", err);
//     return;
//   }
//   console.log("Successfully connected to the database!");
// });

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: "mysql",
});
export default sequelize;
