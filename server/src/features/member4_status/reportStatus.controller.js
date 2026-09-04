const reportStatusService = require('./reportStatus.service');
const { validateStatusTransition } = require('./reportStatus.validation');
const { Report } = require('../../models/Report');

class ReportStatusController {
  async updateStatus(req, res) {
    try {
      const { id } = req.params;
      const { status, note, updatedBy } = req.body;

      const report = await Report.findById(id);
      if (!report) {
        return res.status(404).json({ success: false, message: 'Report not found' });
      }

      const { isValid, errors } = validateStatusTransition(report.status, status);
      if (!isValid) {
        return res.status(400).json({
          success: false,
          message: 'Status transition rejected by workflow rules',
          errors
        });
      }

      const updatedReport = await reportStatusService.updateStatus(
        id,
        status,
        note,
        updatedBy || 'Municipal Officer'
      );

      res.status(200).json({
        success: true,
        message: `Status updated successfully to '${status}'`,
        data: updatedReport
      });
    } catch (error) {
      console.error('Member 4 Update Status Error:', error.message);
      res.status(500).json({ success: false, message: 'Failed to update report status' });
    }
  }

  async getSummary(req, res) {
    try {
      const summary = await reportStatusService.getResolutionSummary();
      res.status(200).json({ success: true, data: summary });
    } catch (error) {
      console.error('Member 4 Summary Error:', error.message);
      res.status(500).json({ success: false, message: 'Failed to fetch summary' });
    }
  }
}

module.exports = new ReportStatusController();