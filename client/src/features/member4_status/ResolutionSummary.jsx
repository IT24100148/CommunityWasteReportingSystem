import React, { useEffect, useState } from 'react';
import { fetchResolutionSummaryApi } from './statusApi';

export default function ResolutionSummary() {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchResolutionSummaryApi();
        setSummary(data);
      } catch (err) {
        console.error('Failed to load summary:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <div>Loading resolution metrics...</div>;
  if (!summary) return null;

  return (
    <div className="resolution-summary-grid">
      <div className="summary-card">
        <span className="summary-num">{summary.total}</span>
        <span className="summary-title">Total Reports</span>
      </div>
      <div className="summary-card">
        <span className="summary-num">{summary.reported}</span>
        <span className="summary-title">Pending</span>
      </div>
      <div className="summary-card">
        <span className="summary-num">{summary.inProgress}</span>
        <span className="summary-title">In Progress</span>
      </div>
      <div className="summary-card">
        <span className="summary-num">{summary.resolved}</span>
        <span className="summary-title">Resolved</span>
      </div>
      <div className="summary-card rate-card">
        <span className="rate-num">{summary.resolutionRate}%</span>
        <span className="summary-title">Resolution Rate</span>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${summary.resolutionRate}%` }} />
        </div>
      </div>
    </div>
  );
}