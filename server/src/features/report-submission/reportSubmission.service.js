const Report = require("../../models/Report");

const createReport = async (reportData) => {
  const report = await Report.create({
    district: reportData.district.trim(),
    area: reportData.area.trim(),
    problemType: reportData.problemType,
    description: reportData.description.trim(),
    severity: reportData.severity,
    status: "Reported",
  });

  return report;
};

module.exports = {
  createReport,
};
