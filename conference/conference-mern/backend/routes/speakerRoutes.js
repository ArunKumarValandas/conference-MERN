const router = require("express").Router();
const Speaker = require("../models/Speaker");

router.post("/", async (req, res) => {
  const speaker = new Speaker(req.body);
  await speaker.save();
  res.json(speaker);
});

router.get("/", async (req, res) => {
  const speakers = await Speaker.find();
  res.json(speakers);
});

module.exports = router;
