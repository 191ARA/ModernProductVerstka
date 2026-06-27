import React from 'react';

const steps = [
  { num: '01', title: 'Connect Your Data', text: 'Link your existing data sources — spreadsheets, CRMs, or databases — in just a few clicks.' },
  { num: '02', title: 'Customize Your View', text: 'Choose from interactive maps, charts, and dashboards tailored to your business needs.' },
  { num: '03', title: 'Share & Collaborate', text: 'Invite your team to explore insights together with real-time sharing and collaboration tools.' },
];

function HowTo() {
  return (
    <section className="how-to" id="how-to">
      <h2 className="how-to-title">Map Your Success</h2>
      <div className="how-to-grid">
        {steps.map((s, i) => (
          <div key={i} className="how-to-step">
            <div className="step-number">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowTo;
