import React from "react";
import "./team.css";

function Team() {
  return (
    <section className="team">
      <div className="container">
        <div className="team-header">
          <h2>Our Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos
            quaerat sapiente nam, id vero.
          </p>
        </div>

        <div className="team-grid">
          {/* Member 1 */}
          <div className="team-member">
            <img src="src\images\person_1.jpg.webp" alt="Cloe Marena" />
            <h4>Cloe Marena</h4>
            <span>PRESIDENT</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem consequatur corporis qui dolorem pariatur ipsam modi
              accusantium repellat.
            </p>
          </div>

          {/* Member 2 */}
          <div className="team-member">
            <img src="src\images\person_2.jpg.webp" alt="John Rooster" />
            <h4>John Rooster</h4>
            <span>MARKETING</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem consequatur corporis qui dolorem pariatur ipsam modi
              accusantium repellat.
            </p>
          </div>

          {/* Member 3 */}
          <div className="team-member">
            <img src="src\images\person_3.jpg.webp" alt="Will Turner" />
            <h4>Will Turner</h4>
            <span>MARKETING</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem consequatur corporis qui dolorem pariatur ipsam modi
              accusantium repellat.
            </p>
          </div>

          {/* Member 4 */}
          <div className="team-member">
            <img src="src\images\person_4.jpg.webp" alt="Nicolas Stainer" />
            <h4>Nicolas Stainer</h4>
            <span>FINANCING</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem consequatur corporis qui dolorem pariatur ipsam modi
              accusantium repellat.
            </p>
          </div>

          {/* Member 5 */}
          <div className="team-member">
            <img src="src\images\person_5.jpg.webp" alt="George Brook" />
            <h4>George Brook</h4>
            <span>FOUNDER</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem consequatur corporis qui dolorem pariatur ipsam modi
              accusantium repellat.
            </p>
          </div>

          {/* Member 6 */}
          <div className="team-member">
            <img src="src\images\person_6.jpg copy.webp" alt="Emely Hopson" />
            <h4>Emely Hopson</h4>
            <span>MARKETING</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem consequatur corporis qui dolorem pariatur ipsam modi
              accusantium repellat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
