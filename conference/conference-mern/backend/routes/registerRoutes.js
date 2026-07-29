const router = require("express").Router();
const Registration = require("../models/Registration");

router.post("/", async (req, res) => {
  const reg = new Registration(req.body);
  await reg.save();
  res.json("Registered Successfully");
});

module.exports = router;
