require("dotenv").config(); // Load .env variables
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB()
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((error) => {
        console.error("❌ MongoDB Connection Error:", error.message);
        process.exit(1);
    });

// Routes
const authRoutes = require("./routes/authRoutes");
const campaignRoutes = require("./routes/campaignRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/campaigns", campaignRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
