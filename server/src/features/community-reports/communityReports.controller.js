const mongoose = require('mongoose');
const reportsService = require('./communityReports.service');

async function getReports(req, res) {
	try {
		const reports = await reportsService.getReports({
			area: req.query.area,
			district: req.query.district,
			problemType: req.query.problemType,
			status: req.query.status,
			severity: req.query.severity,
		});

		return res.status(200).json(reports);
	} catch (error) {
		return res.status(500).json({ message: 'Unable to fetch reports', error: error.message });
	}
}

async function getReportById(req, res) {
	if (!mongoose.isValidObjectId(req.params.id)) {
		return res.status(400).json({ message: 'Invalid report id' });
	}

	try {
		const report = await reportsService.getReportById(req.params.id);

		if (!report) {
			return res.status(404).json({ message: 'Report not found' });
		}

		return res.status(200).json(report);
	} catch (error) {
		return res.status(500).json({ message: 'Unable to fetch report', error: error.message });
	}
}

module.exports = {
	getReports,
	getReportById,
};
