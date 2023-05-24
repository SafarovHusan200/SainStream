import React from "react";
import "./stream-card.css";

export default function StreamCardComponent({ logo }) {
  return (
    <div className="stream-brand-card">
      <img src={logo} alt="" />
    </div>
  );
}
