import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import ReportIssuePage from "./features/report-submission/pages/ReportIssuePage";
import "./App.css";

const NavigationBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🌱</span>
          <span className="logo-text">CleanLK</span>
        </Link>
        <nav className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/report" className="nav-link nav-btn">Report Issue</Link>
          <Link to="/reports" className="nav-link">Community Reports</Link>
        </nav>
      </div>
    </header>
  );
};

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-hero">
        <span className="hero-badge">Clean & Green Sri Lanka</span>
        <h1>Community Waste Reporting System</h1>
        <p>
          Empowering communities across Sri Lanka to report, track, and resolve
          local waste and environmental issues collaboratively.
        </p>
        <div className="hero-actions">
          <Link to="/report" className="primary-button">
            Report Waste Issue Now →
          </Link>
        </div>
      </div>
    </div>
  );
};

const TemporaryPage = ({ title }) => {
  return (
    <div className="temporary-page">
      <h2>{title}</h2>
      <p>This module is under development by the assigned team member.</p>
      <Link to="/report" className="primary-button">
        Go to Report Waste Issue
      </Link>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app-layout">
        <NavigationBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/report" element={<ReportIssuePage />} />
            <Route
              path="/reports"
              element={<TemporaryPage title="Community Reports" />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
