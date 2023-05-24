import React from "react";
import "./header-hero_btn-play.css";
const iconPlay = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.6 12C20.6 16.7496 16.7497 20.6 12 20.6C7.25038 20.6 3.40002 16.7496 3.40002 12C3.40002 7.25035 7.25038 3.39999 12 3.39999C16.7497 3.39999 20.6 7.25035 20.6 12ZM12.0204 7.76948C11.3453 7.31943 10.4773 7.27747 9.76194 7.66031C9.04659 8.04315 8.60002 8.78865 8.60002 9.6V14.4C8.60002 15.2113 9.04659 15.9568 9.76194 16.3397C10.4773 16.7225 11.3453 16.6806 12.0204 16.2305L15.6204 13.8305C16.2324 13.4225 16.6 12.7356 16.6 12C16.6 11.2644 16.2324 10.5775 15.6204 10.1695L12.0204 7.76948Z"
      fill="white"
      stroke="white"
      stroke-width="2"
    />
  </svg>
);

export default function HeaderHeroBtnPlay() {
  return (
    <button className="header-hero-btn-play">
      <span className="icon-play">{iconPlay}</span>
      <span className="header-hero-btn-play_content">Play Now</span>
    </button>
  );
}
