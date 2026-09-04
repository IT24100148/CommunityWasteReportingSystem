const express = require('express');
const {
	getReports,
	getReportById,
} = require('./communityReports.controller');

const router = express.Router();

router.get('/', getReports);
router.get('/:id', getReportById);

module.exports = router;
