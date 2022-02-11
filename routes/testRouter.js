const express = require("express");
const {
  getTest,
  setTest,
  updateTest,
  deleteTest,
} = require("../controllers/testController");

const router = express.Router();

router.route("/").get(getTest).post(setTest);
router.route("/:id").put(updateTest).delete(deleteTest);

module.exports = router;
