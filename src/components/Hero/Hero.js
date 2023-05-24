import React from "react";
import "./style.css";

function Hero() {
  return (
    <div className="container">
      <div className="content">
        <h1 className="name">The Mandalorian</h1>
        <div className="date">2h40m • 2022 • Fantasy • Actions</div>
        <p className="text">
          The third season of the American television series The Mandalorian
          stars Pedro Pascal as the title character, a bounty hunter traveling
          to Mandalore to redeem his past transgressions with his adopted son
          Grogu and being aided on their journey by fellow Mandalorian Bo-Katan
          Kryze.
        </p>
      </div>
    </div>
  );
}

export default Hero;
