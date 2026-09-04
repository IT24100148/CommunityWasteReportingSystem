const Report = require("../../models/Report");

const getReportStatistics = async () => {
  const [
    total,
    reported,
    inProgress,
    resolved
  ] = await Promise.all([
    Report.countDocuments(),
    Report.countDocuments({ status: "Reported" }),
    Report.countDocuments({ status: "In Progress" }),
    Report.countDocuments({ status: "Resolved" }),
  ]);

  return {
    total,
    reported,
    inProgress,
    resolved,
  };
};

const getRecentReports = async () => {
  const reports = await Report.find()
    .sort({ createdAt: -1 })
    .limit(3)
    .select(
      "district area problemType description severity status createdAt"
    );

  return reports;
};

module.exports = {
  getReportStatistics,
  getRecentReports,
};