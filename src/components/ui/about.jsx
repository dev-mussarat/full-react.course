import React from "react";
import "./about.css";

function About() {
  return (
    <section className="about-section">
      <h1 className="about-title">About Us</h1>

      <div className="about-container">
        {/* Left Image */}
        <div className="about-image">
          <img src="src\images\image.png" alt="About Illustration" />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            Eos cumque optio dolores excepturi rerum temporibus magni recusandae
            eveniet, totam omnis consectetur maxime quibusdam expedita dolorem
            dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus!
            At maiores, itaque.
          </p>

          <ul className="about-list">
            <li>Laborum enim quasi at modi</li>
            <li> Ad at tempore</li>
            <li> Labore quaerat esse</li>
          </ul>

          <button className="about-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default About;

