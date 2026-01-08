const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const resourceRoutes = require("./routes/resource.routes");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/resources", resourceRoutes);

app.get("/", (req, res) => {
  res.send("Resource Manager API with MongoDB 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
