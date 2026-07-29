const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  conference: String
});

module.exports = mongoose.model("Registration", RegistrationSchema);
