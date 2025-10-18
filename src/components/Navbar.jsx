import React from 'react'
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <header class="navbar">
    <div class="navbar-logo">imagine<span>.</span></div>

    <nav class="navbar-menu">
      <ul>
        <li><a href="#" class="active">Home</a></li>
        <li><a href="#">Features</a></li>
        <li class="dropdown">
          <a href="#">About Us</a>
        </li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
    </div>
  )
}

export default Navbar
