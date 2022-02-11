const mongoose = require("mongoose");
const { config } = require("dotenv");
const { DB_URI } = config().parsed;

const dbConnection = () => {
  mongoose.connect(DB_URI);
  mongoose.connection
    .once("open", () => console.log("Connected".green))
    .on("error", () => console.log("Error".red));
};

module.exports = dbConnection;
