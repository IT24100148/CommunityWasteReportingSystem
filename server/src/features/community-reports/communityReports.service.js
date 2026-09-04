const Report = require('../../models/Report');

async function getReports(filters = {}) {
	const query = {};

	if (filters.area) {
		query.area = { $regex: filters.area, $options: 'i' };
	}
	if (filters.district) query.district = filters.district;
	if (filters.problemType) query.problemType = filters.problemType;
	if (filters.status) query.status = filters.status;
	if (filters.severity) query.severity = filters.severity;

	return Report.find(query).sort({ createdAt: -1 });
}

async function getReportById(id) {
	return Report.findById(id);
}

module.exports = {
	getReports,
	getReportById,
};
