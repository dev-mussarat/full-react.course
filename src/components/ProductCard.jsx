import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, description, price, rating }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <h3 className="product-title">{title}</h3>
      <p className="product-desc">{description}</p>
      <div className="product-info">
        <span className="price">${price}</span>
        <span className="rating">⭐ {rating}</span>
      </div>
      <button className="btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;