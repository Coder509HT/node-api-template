const Test = require("../models/testModel");

const getTest = async (req, res) => {
  const tests = await Test.find();
  res.status(200).json(tests);
};

const setTest = async (req, res) => {
  const { test } = req.body;
  const newTest = await Test.create({ test });
  res.status(201).json(newTest);
};

const updateTest = async (req, res) => {
  const { id } = req.params;
  const { test } = req.body;

  const updatedTest = await Test.findByIdAndUpdate(id, { test }, { new: true });

  res.status(201).json(updatedTest);
};

const deleteTest = async (req, res) => {
  const { id } = req.params;
  const updatedTest = await Test.findByIdAndRemove(id);
  res.status(202).json(id);
};

module.exports = {
  getTest,
  setTest,
  updateTest,
  deleteTest,
};
