import React from 'react';

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Amplify Insights',
    description: 'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Control Your Global Presence',
    description: 'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8l6 6"/><path d="M4 14l6-6 2 2"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="M14 8V2h6v6h-2"/><path d="M14 11l1 1"/><path d="M20 8v7c0 1.1-.9 2-2 2h-5"/><path d="M18 21l-3-3 3-3"/>
      </svg>
    ),
    title: 'Remove Language Barriers',
    description: 'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Visualize Growth',
    description: 'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.'
  }
];

function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <p className="section-label">Benefits</p>
      <h2 className="benefits-title">We've cracked the code.</h2>
      <p className="benefits-subtitle">Area provides real insights, without the data overload.</p>
      <div className="benefits-divider"></div>
      <div className="benefits-grid">
        {benefits.map((b, i) => (
          <div key={i} className="benefit-card">
            <div className="benefit-icon">{b.icon}</div>
            <h3>{b.title}</h3>
            <p>{b.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
