import React from 'react';

const specs = [
  { num: '01', title: 'Spot Trends in Seconds:', text: 'No more digging through numbers.' },
  { num: '02', title: 'Get Everyone on the Same Page:', text: 'Share easy-to-understand reports with your team.' },
  { num: '03', title: 'Make Presentations Pop:', text: 'Interactive maps and dashboards keep your audience engaged.' },
  { num: '04', title: 'Your Global Snapshot:', text: 'Get a quick, clear overview of your entire operation.' },
];

function Specifications() {
  return (
    <section className="specifications" id="specifications">
      <div className="specifications-content">
        <h2 className="specifications-title">See the Big Picture</h2>
        <p className="specifications-subtitle">
          Area turns your data into clear, vibrant visuals that show you exactly
          what's happening in each region.
        </p>
        <div className="spec-list">
          {specs.map((s, i) => (
            <div key={i} className="spec-item">
              <span className="spec-number">{s.num}</span>
              <p><strong>{s.title}</strong> {s.text}</p>
            </div>
          ))}
        </div>
        <div>
          <button className="btn-secondary">Discover More</button>
        </div>
      </div>

      <div className="specifications-image">
        <div className="podium-scene">
          <div className="spec-nav">
            <button aria-label="Previous">‹</button>
            <button aria-label="Next">›</button>
          </div>
          <div className="podium podium-tall"></div>
          <div className="podium podium-mid"></div>
          <div className="podium podium-short"></div>
          <div className="podium podium-wide"></div>
        </div>
      </div>
    </section>
  );
}

export default Specifications;
