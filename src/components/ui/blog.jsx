import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="section-title">Blog Posts</h2>

        <div className="blog-grid">
          {/* Blog 1 */}
          <div className="blog-card">
            <img src="src\images\blog 1.webp" alt="Blog 1" className="blog-img" />
            <div className="blog-content">
              <h3>Make Your Business More Profitable</h3>
              <p className="blog-meta">
                Ham Brook <span>•</span> Jan 18, 2019 <span>•</span>{" "}
                <a href="#">News</a>
              </p>
              <p className="blog-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                eligendi nobis ea maiores sapiente veritatis reprehenderit
                suscipit quaerat rerum voluptatibus a eius.
              </p>
              <a href="#" className="blog-link">
                Continue Reading...
              </a>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="blog-card">
            <img src="src\images\blog 2.webp" alt="Blog 2" className="blog-img" />
            <div className="blog-content">
              <h3>Make Your Business More Profitable</h3>
              <p className="blog-meta">
                James Phelps <span>•</span> Jan 18, 2019 <span>•</span>{" "}
                <a href="#">News</a>
              </p>
              <p className="blog-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                eligendi nobis ea maiores sapiente veritatis reprehenderit
                suscipit quaerat rerum voluptatibus a eius.
              </p>
              <a href="#" className="blog-link">
                Continue Reading...
              </a>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="blog-card">
            <img src="src\images\blog 3.webp" alt="Blog 3" className="blog-img" />
            <div className="blog-content">
              <h3>Make Your Business More Profitable</h3>
              <p className="blog-meta">
                James Phelps <span>•</span> Jan 18, 2019 <span>•</span>{" "}
                <a href="#">News</a>
              </p>
              <p className="blog-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                eligendi nobis ea maiores sapiente veritatis reprehenderit
                suscipit quaerat rerum voluptatibus a eius.
              </p>
              <a href="#" className="blog-link">
                Continue Reading...
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
