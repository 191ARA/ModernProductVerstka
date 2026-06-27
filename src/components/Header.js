import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">Area</div>
      <nav>
        <ul className="header-nav">
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#specifications">Specifications</a></li>
          <li><a href="#how-to">How-to</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
      <a href="#contact" className="btn-primary">Learn More ↗</a>
    </header>
  );
}

export default Header;
