import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import StatsCards from "../components/StatsCards";
import HowItWorks from "../components/HowItWorks";
import RecentReports from "../components/RecentReports";

import {
  getDashboardStats,
  getRecentReports,
} from "../services/dashboardApi";

import "../styles/homeDashboard.css";

const HomePage = () => {
  const [stats, setStats] = useState({
    total: 0,
    reported: 0,
    inProgress: 0,
    resolved: 0,
  });

  const [recentReports, setRecentReports] = useState([]);

  const [loadingStats, setLoadingStats] = useState(true);
  const [loadingReports, setLoadingReports] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setError("");

        const [statsData, recentData] = await Promise.all([
          getDashboardStats(),
          getRecentReports(),
        ]);

        setStats(statsData);
        setRecentReports(recentData);
      } catch (err) {
        console.error("Dashboard loading error:", err);

        setError(
          "Some dashboard information could not be loaded. Please try again later."
        );
      } finally {
        setLoadingStats(false);
        setLoadingReports(false);
      }
    };

    loadDashboardData();
  }, []);

  return (
    <main>
      <Hero />

      <ProblemSection />

      {error && <div className="dashboard-error">{error}</div>}

      <StatsCards stats={stats} loading={loadingStats} />

      <HowItWorks />

      <RecentReports
        reports={recentReports}
        loading={loadingReports}
      />
    </main>
  );
};

export default HomePage;