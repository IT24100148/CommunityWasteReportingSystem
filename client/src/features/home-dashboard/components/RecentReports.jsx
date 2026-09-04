import { Link } from "react-router-dom";

const RecentReports = ({ reports, loading }) => {
  const getSeverityClass = (severity) => {
    return `severity severity-${severity?.toLowerCase()}`;
  };

  const getStatusClass = (status) => {
    return `report-status status-${status
      ?.toLowerCase()
      .replaceAll(" ", "-")}`;
  };

  return (
    <section className="recent-section">
      <div className="recent-header">
        <div>
          <span className="section-label">Latest Activity</span>
          <h2>Recent Community Reports</h2>
        </div>

        <Link to="/reports" className="view-all-link">
          View All Reports →
        </Link>
      </div>

      {loading ? (
        <div className="state-message">Loading recent reports...</div>
      ) : reports.length === 0 ? (
        <div className="state-message">
          No reports have been submitted yet.
        </div>
      ) : (
        <div className="recent-grid">
          {reports.map((report) => (
            <article className="recent-card" key={report._id}>
              <div className="recent-card-top">
                <span className={getSeverityClass(report.severity)}>
                  {report.severity}
                </span>

                <span className={getStatusClass(report.status)}>
                  {report.status}
                </span>
              </div>

              <h3>{report.problemType}</h3>

              <p className="report-location">
                📍 {report.area}, {report.district}
              </p>

              <p className="report-description">
                {report.description.length > 100
                  ? `${report.description.substring(0, 100)}...`
                  : report.description}
              </p>

              <small>
                Reported{" "}
                {new Date(report.createdAt).toLocaleDateString("en-LK")}
              </small>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default RecentReports;