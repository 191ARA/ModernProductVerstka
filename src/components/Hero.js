import React from 'react';

function Hero() {
  // lollipop-style chart: thin sticks with a dot on top, rising left → right
  const bars = [28, 22, 34, 26, 30, 24, 38, 30, 44, 34, 40, 46, 52, 44, 58, 50, 66, 72];

  return (
    <section className="hero">
      <h1 className="hero-title">Browse everything.</h1>
      <div className="hero-visual">
        <div className="hero-shape hero-shape-left"></div>
        <div className="hero-shape hero-shape-right"></div>

        <div className="laptop">
          <div className="laptop-screen">
            <div className="dashboard">
              <div className="dashboard-sky"></div>
              <div className="dashboard-hill"></div>

              <div className="dashboard-ui">
                <div className="dashboard-top">
                  <span className="dashboard-crumb">Reports &nbsp;›&nbsp; Overview</span>
                  <span className="dashboard-pill">All Regions (32) ▾</span>
                </div>

                <div className="dashboard-stat">
                  <span className="dashboard-stat-num">78%</span>
                  <span className="dashboard-stat-label">Efficiency Improvements</span>
                </div>

                <div className="dashboard-chart">
                  {bars.map((h, i) => (
                    <div className="chart-stick" key={i} style={{ height: `${h}%` }}>
                      <span className="chart-dot"></span>
                    </div>
                  ))}
                </div>

                <div className="dashboard-axis">
                  <span>2021</span><span>2022</span><span>2023</span><span>2024</span>
                </div>
              </div>
            </div>
          </div>
          <div className="laptop-base"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
