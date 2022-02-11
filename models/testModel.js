const mongoose = require("mongoose");

const testSchema = mongoose.Schema(
  {
    test: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tests", testSchema);
