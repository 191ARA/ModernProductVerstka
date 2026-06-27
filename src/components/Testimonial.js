import React from 'react';

function Testimonial() {
  return (
    <section className="testimonial">
      <div className="testimonial-image">
        <div className="sphere-scene">
          <div className="sphere-pedestal"></div>
          <div className="sphere"></div>
        </div>
      </div>
      <div className="testimonial-content">
        <p className="testimonial-quote">
          "I was skeptical, but Area has completely transformed the way I manage
          my business. The visualizations are so clear and intuitive, and the
          platform is so easy to use. I can't imagine running my company without it."
        </p>
        <p className="testimonial-author">— Sarah M., Regional Operations Director</p>
      </div>
    </section>
  );
}

export default Testimonial;
