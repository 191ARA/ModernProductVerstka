import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul className="footer-nav">
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#specifications">Specifications</a></li>
          <li><a href="#how-to">How-to</a></li>
        </ul>
      </nav>
      <div className="footer-right">
        <a href="#contact" className="btn-primary">Contact ↗</a>
        <div className="footer-circle"></div>
      </div>
    </footer>
  );
}

export default Footer;
