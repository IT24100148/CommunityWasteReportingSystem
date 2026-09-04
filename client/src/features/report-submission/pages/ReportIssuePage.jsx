import ReportForm from "../components/ReportForm";

import "../styles/reportSubmission.css";

const ReportIssuePage = () => {
  return (
    <main className="report-page">
      <section className="report-page-header">
        <span className="report-page-label">
          Community Reporting
        </span>

        <h1>Report a Waste Problem</h1>

        <p>
          Help make waste problems visible in your
          community. Submit the location, type and
          severity of the issue you have observed.
        </p>
      </section>

      <section className="report-form-container">
        <div className="form-information">
          <h2>Waste Issue Details</h2>

          <p>
            Please provide accurate information so
            community reports can be clearly
            understood and tracked.
          </p>

          <div className="information-card">
            <span>📍</span>

            <div>
              <strong>Be specific</strong>

              <p>
                Enter the district and local area
                where the problem was observed.
              </p>
            </div>
          </div>

          <div className="information-card">
            <span>📝</span>

            <div>
              <strong>Describe the issue</strong>

              <p>
                Give enough detail for someone viewing
                the report to understand the problem.
              </p>
            </div>
          </div>

          <div className="information-card">
            <span>🚨</span>

            <div>
              <strong>Select severity</strong>

              <p>
                Choose Low, Medium or High based on
                how serious the waste issue is.
              </p>
            </div>
          </div>
        </div>

        <div className="form-card">
          <ReportForm />
        </div>
      </section>
    </main>
  );
};

export default ReportIssuePage;
