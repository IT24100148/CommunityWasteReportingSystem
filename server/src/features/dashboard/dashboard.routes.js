const express = require("express");

const {
  getStats,
  getRecent,
} = require("./dashboard.controller");

const router = express.Router();

router.get("/stats", getStats);

router.get("/recent", getRecent);

module.exports = router;