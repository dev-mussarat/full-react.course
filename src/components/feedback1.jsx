import React from "react";
import "./feedback1.css";

function feedback1() {
  return (
    <section className="feedback1-section">
      <div className="feedback1-container">
        {/* Left Side Image */}
        <div className="feedback1-image">
          <img src="src\images\undraw_gift_card_6ekc.svg" alt="Feedback Illustration" />
        </div>

        {/* Right Side Content */}
        <div className="feedback1-content">
          <h1>Communicate and gather feedback</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            neque nisi architecto autem molestias corrupti officia veniam.
          </p>

          {/* Testimonial Card */}
          <div className="feedback1-card">
            <div className="feedback1-card-header">
              <img src="src\images\person_3.jpg.webp" alt="Profile" />
              <div>
                <h3>Grey Simpson</h3>
                <span>Co-Founder, XYZ Inc.</span>
              </div>
            </div>
            <p className="feedback1-quote">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              vitae ipsa asperiores inventore aperiam iure?”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default feedback1;
