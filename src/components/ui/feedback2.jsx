import React from "react";
import "./feedback2.css";

function Feedback2() {
  return (
    <section className="feedback2-section">
      <div className="feedback2-container">
        {/* Left Side Content */}
        <div className="feedback2-content">
          <h1>Communicate and gather feedback</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            neque nisi architecto autem molestias corrupti officia veniam
          </p>

          {/* Testimonial Card */}
          <div className="feedback2-card">
            <div className="feedback2-card-header">
              <img src="src\images\person_1.jpg.webp" alt="Profile" />
              <div>
                <h3>Kimberly Gush</h3>
                <span>Co-Founder, XYZ Inc.</span>
              </div>
            </div>
            <p className="feedback2-quote">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              vitae ipsa asperiores inventore aperiam iure?”
            </p>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="feedback2-image">
          <img src="src\images\undraw_metrics_gtu7.svg" alt="Feedback Illustration" />
        </div>
      </div>
    </section>
  );
}

export default Feedback2;
