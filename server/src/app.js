const express = require("express");
const cors = require("cors");

const reportSubmissionRoutes = require("./features/report-submission/reportSubmission.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "CleanLK API is running",
  });
});

app.use("/api/reports", reportSubmissionRoutes);

module.exports = app;
