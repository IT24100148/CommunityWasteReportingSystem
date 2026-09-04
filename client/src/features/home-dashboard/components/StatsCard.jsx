const StatsCards = ({ stats, loading }) => {
  const cards = [
    {
      title: "Total Reports",
      value: stats?.total || 0,
      icon: "📋",
    },
    {
      title: "Reported",
      value: stats?.reported || 0,
      icon: "🔔",
    },
    {
      title: "In Progress",
      value: stats?.inProgress || 0,
      icon: "🔄",
    },
    {
      title: "Resolved",
      value: stats?.resolved || 0,
      icon: "✅",
    },
  ];

  return (
    <section className="stats-section">
      <div className="section-heading center">
        <span className="section-label">Community Overview</span>
        <h2>Waste Report Statistics</h2>
        <p>See the current status of reports submitted through CleanLK.</p>
      </div>

      <div className="stats-grid">
        {cards.map((card) => (
          <div className="stat-card" key={card.title}>
            <div className="stat-icon">{card.icon}</div>

            <div>
              <h3>{loading ? "..." : card.value}</h3>
              <p>{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCards;