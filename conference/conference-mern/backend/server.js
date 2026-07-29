const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const speakerRoutes = require("./routes/speakerRoutes");
const registerRoutes = require("./routes/registerRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/speakers", speakerRoutes);
app.use("/api/register", registerRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
const protect = require("./middleware/authMiddleware");

app.get("/api/protected", protect, (req, res) => {
  res.json({ message: "Protected route accessed", userId: req.userId });
});
