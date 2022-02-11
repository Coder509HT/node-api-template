const express = require("express");
const app = express();
const { config } = require("dotenv");
const { PORT: port } = config().parsed;
const { magenta } = require("colors");
const dbConnection = require("./config/dbConnection");

app.use(express.urlencoded({ extended: true }));
app.use("/tests", require("./routes/testRouter"));

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`.magenta)
);

dbConnection();
