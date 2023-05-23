import React from "react";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
function Header() {
  return (
    <div className="header">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Header;
