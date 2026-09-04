const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Report",
      description:
        "Submit the district, area, problem type, severity and description.",
    },
    {
      number: "02",
      title: "Track",
      description:
        "View waste problems reported by members of the community.",
    },
    {
      number: "03",
      title: "Resolve",
      description:
        "Follow each issue as its status changes from Reported to Resolved.",
    },
  ];

  return (
    <section className="how-section">
      <div className="section-heading center">
        <span className="section-label">Simple Process</span>
        <h2>How CleanLK Works</h2>
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <div className="step-card" key={step.number}>
            <span className="step-number">{step.number}</span>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;