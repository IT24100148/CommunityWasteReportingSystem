const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./src/app");

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/cleanlk";

const startServer = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(MONGODB_URI);
      console.log("Connected to MongoDB successfully");
    } else {
      console.log(
        "No MONGODB_URI provided in environment. Attempting default connection..."
      );
      try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to MongoDB successfully");
      } catch (dbErr) {
        console.warn(
          "MongoDB connection failed. Starting server in offline DB mode:",
          dbErr.message
        );
      }
    }

    app.listen(PORT, () => {
      console.log(`CleanLK Backend Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
