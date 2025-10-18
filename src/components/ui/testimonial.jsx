import React from 'react'
import './testimonial.css';

function testimonial() {
  return (
    <div>
     <section class="testimonials">
    <div class="container">
      <h2>Testimonials</h2>

      <div class="testimonial-card">
        <img src="src\images\person_2.jpg.webp" alt="Robert Aguilar" class="testimonial-img" />
        <p class="testimonial-text">
          “Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde 
          reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga 
          beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”
        </p>
        <h4 class="testimonial-name">Robert Aguilar</h4>

        <div class="dots">
          <span class="dot"></span>
          <span class="dot active"></span>
          <span class="dot"></span>
        </div>
      </div>
    </div>
  </section> 
    </div>
  )
}

export default testimonial
