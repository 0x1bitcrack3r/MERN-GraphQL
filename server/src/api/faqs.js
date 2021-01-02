const express = require("express");
const monk = require("monk");

const db = monk(process.env.MONGO_URI);
const faqs = db.get("faqs");

const router = express.Router();

//Read all
router.get("/", async (req, res, next) => {
  try {
    const items = await faqs.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
});

//Read one
router.get("/:id", (req, res, next) => {
  res.json({
    message: "Hello read one",
  });
});

//Create one
router.post("/:id", (req, res, next) => {
  res.json({
    message: "Hello create one",
  });
});

//Update one
router.put("/:id", (req, res, next) => {
  res.json({
    message: "Hello update one",
  });
});

//Delete one
router.delete("/:id", (req, res, next) => {
  res.json({
    message: "Hello delete one",
  });
});

module.exports = router;
