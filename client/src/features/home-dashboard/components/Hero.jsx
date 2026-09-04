import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-badge">Community Waste Reporting</span>

        <h1>
          Cleaner Communities.
          <span> One Report at a Time.</span>
        </h1>

        <p>
          CleanLK helps Sri Lankan communities report waste-related problems,
          monitor their status and make local environmental issues more visible.
        </p>

        <div className="hero-actions">
          <Link to="/report" className="btn btn-primary">
            Report Waste Issue
          </Link>

          <Link to="/reports" className="btn btn-secondary">
            View Community Reports
          </Link>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <div className="hero-card-icon">♻️</div>

          <h3>CleanLK</h3>

          <p>Report. Track. Resolve.</p>

          <div className="mini-report">
            <span>📍 Nallur, Jaffna</span>
            <strong>Illegal Dumping</strong>
            <span className="mini-status">Reported</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;