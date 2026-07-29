const mongoose = require("mongoose");

const SpeakerSchema = new mongoose.Schema({
  name: String,
  topic: String,
  designation: String
});

module.exports = mongoose.model("Speaker", SpeakerSchema);
