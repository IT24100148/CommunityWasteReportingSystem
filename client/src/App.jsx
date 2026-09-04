import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import ReportDetailsPage from './features/member4_status/ReportDetailsPage';
import ResolutionSummary from './features/member4_status/ResolutionSummary';

// Home view for Member 4 testing & preview
function Member4Home() {
  const [testId, setTestId] = useState('');
  const navigate = useNavigate();

  const handleGoToReport = (e) => {
    e.preventDefault();
    if (testId.trim()) {
      navigate(`/reports/${testId.trim()}`);
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <h1 style={{ color: '#0f172a', margin: '0 0 0.5rem 0' }}>CleanLK — Status & Resolution Management</h1>
        <p style={{ color: '#64748b', margin: 0 }}>Member 4: Workflow Tracking, Audit History & Resolution Analytics</p>
      </header>

      {/* Member 4 Resolution Analytics Widget */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', color: '#1e293b', marginBottom: '1rem' }}>Overall Resolution Analytics</h2>
        <ResolutionSummary />
      </section>

      {/* Report ID Quick Jump (For easy testing during development and viva) */}
      <section style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '1.5rem' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#1e293b' }}>Inspect & Update a Specific Report</h3>
        <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' }}>
          Enter a MongoDB Report <code>_id</code> below to open its status timeline and update controls:
        </p>

        <form onSubmit={handleGoToReport} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Paste Report _id here..."
            value={testId}
            onChange={(e) => setTestId(e.target.value)}
            style={{
              flex: '1',
              minWidth: '260px',
              padding: '0.6rem 0.8rem',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              fontSize: '0.95rem'
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#0284c7',
              color: '#ffffff',
              border: 'none',
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Track Report →
          </button>
        </form>
      </section>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Member4Home />} />

        {/* Member 4 Feature Route */}
        <Route path="/reports/:id" element={<ReportDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;