const reportSubmissionService = require("./reportSubmission.service");
const { validateReportData } = require("./reportSubmission.validation");

const createReport = async (req, res) => {
  try {
    const validation = validateReportData(req.body);

    if (!validation.valid) {
      return res.status(400).json({
        message: "Please correct the report details.",
        errors: validation.errors,
      });
    }

    const report = await reportSubmissionService.createReport(req.body);

    return res.status(201).json({
      message: "Waste issue reported successfully.",
      report,
    });
  } catch (error) {
    console.error("Create report error:", error);

    return res.status(500).json({
      message: "Unable to submit the waste report.",
    });
  }
};

module.exports = {
  createReport,
};
