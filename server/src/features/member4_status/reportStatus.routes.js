const express = require('express');
const router = express.Router();
const reportStatusController = require('./reportStatus.controller');

// Important: summary route MUST be above /:id route
router.get('/status/summary', reportStatusController.getSummary);
router.patch('/:id/status', reportStatusController.updateStatus);

module.exports = router;