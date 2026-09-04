const dashboardService = require("./dashboard.service");

const getStats = async (req, res) => {
  try {
    const stats = await dashboardService.getReportStatistics();

    return res.status(200).json(stats);
  } catch (error) {
    console.error("Dashboard stats error:", error);

    return res.status(500).json({
      message: "Unable to retrieve dashboard statistics.",
    });
  }
};

const getRecent = async (req, res) => {
  try {
    const reports = await dashboardService.getRecentReports();

    return res.status(200).json(reports);
  } catch (error) {
    console.error("Recent reports error:", error);

    return res.status(500).json({
      message: "Unable to retrieve recent reports.",
    });
  }
};

module.exports = {
  getStats,
  getRecent,
};