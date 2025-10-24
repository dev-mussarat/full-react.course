import React from "react";
import ProductCard from "./components/ProductCard";
import products from "./data/products";
import "./index.css";


function App() {
  return (
    <div className="main">
      <header className="header">
        <h1>Daraz Front Page</h1>
        <p>Shop top-rated products at the best prices!</p>
      </header>

      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default App;