import React from 'react'
import './Imagine.css';
import { IoMdSync } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRotateLeft } from "react-icons/fa6";
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaPlug } from "react-icons/fa";


function features() {
  return (
    <div>
      <section class="feature-section">
    <div class="feature-header">
      <h2>Imagine Features</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.</p>
    </div>

    <div class="feature-grid">
      <div class="feature-box">
        <div class="feature-icon">
          <IoMdSync />
        </div>
        <h3>Marketing Consulting</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
        <a href="#">Learn More</a>
      </div>

      <div class="feature-box">
        <div class="feature-icon">
          <IoHomeOutline />
        </div>
        <h3>Market Analysis</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
        <a href="#">Learn More</a>
      </div>

      <div class="feature-box">
        <div class="feature-icon">
          <HiOutlineShoppingBag />
        </div>
        <h3>Easy Purchase</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
        <a href="#">Learn More</a>
      </div>

      <div class="feature-box">
        <div class="feature-icon">
          <FaRotateLeft />
        </div>
        <h3>Free Updates</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
        <a href="#">Learn More</a>
      </div>

      <div class="feature-box">
        <div class="feature-icon">
         <FaRegFaceSmile />
        </div>
        <h3>100% Satisfied</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
        <a href="#">Learn More</a>
      </div>

      <div class="feature-box">
        <div class="feature-icon">
         <FaPlug />
        </div>
        <h3>Easy Plugin</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
        <a href="#">Learn More</a>
      </div>
    </div>
  </section>
    </div>
  )
}

export default features
