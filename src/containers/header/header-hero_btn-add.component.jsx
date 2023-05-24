import React from "react";
import "./header-hero_btn-add.css";

const iconAdd = (
  <svg
    width="16"
    height="20"
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V19L8 15.5L1 19V3Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default function HeaderHeroBtnAddComponent() {
  return (
    <button className="header-hero_btn-add">
      <span>{iconAdd}</span>
      <span className="header-hero_btn-add-content">Add Watchlist</span>
    </button>
  );
}
