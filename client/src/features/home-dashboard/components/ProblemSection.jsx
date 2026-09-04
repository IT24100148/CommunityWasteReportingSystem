const ProblemSection = () => {
  return (
    <section className="problem-section">
      <div className="section-heading">
        <span className="section-label">Why CleanLK?</span>
        <h2>A Local Problem That Needs Community Visibility</h2>
      </div>

      <div className="problem-content">
        <div className="problem-description">
          <p>
            Improper waste disposal and delayed garbage collection affect many
            communities across Sri Lanka. Residents may encounter overflowing
            bins, illegal dumping, roadside garbage or uncollected waste without
            having a simple way to report and track these issues.
          </p>

          <p>
            CleanLK provides a lightweight community platform where residents
            can report waste-related problems and follow their progress from
            <strong> Reported</strong> to <strong>In Progress</strong> and
            finally <strong>Resolved</strong>.
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card">
            <span>🗑️</span>
            <h3>Uncollected Waste</h3>
            <p>
              Garbage that remains uncollected can create unpleasant and
              unhealthy environments.
            </p>
          </div>

          <div className="problem-card">
            <span>🚯</span>
            <h3>Illegal Dumping</h3>
            <p>
              Waste dumped on roadsides and public land affects communities and
              the environment.
            </p>
          </div>

          <div className="problem-card">
            <span>♻️</span>
            <h3>Overflowing Bins</h3>
            <p>
              Public waste bins that are not cleared on time may overflow into
              surrounding areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;