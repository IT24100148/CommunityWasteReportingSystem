const express = require("express");
const { createReport } = require("./reportSubmission.controller");

const router = express.Router();

router.post("/", createReport);

module.exports = router;
