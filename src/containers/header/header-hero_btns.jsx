import React from "react";
import "./header-hero_btns.css";
import HeaderHeroBtnPlay from "./header-hero_btn-play.component";
import HeaderHeroBtnWatchComponent from "./header-hero_btn-watch.component";
import HeaderHeroBtnAddComponent from "./header-hero_btn-add.component";

export default function HeaderHeroBtns() {
  return (
    <div className="header-hero-btns">
      <div className="header-hero-btn-group">
        <HeaderHeroBtnPlay />
        <HeaderHeroBtnWatchComponent />
        <HeaderHeroBtnAddComponent />
      </div>
      <div className="header-hero-carousel-btn">
        <div className="header-hero-carousel-btn-tochka active"></div>
        <div className="header-hero-carousel-btn-tochka"></div>
        <div className="header-hero-carousel-btn-tochka"></div>
        <div className="header-hero-carousel-btn-tochka"></div>
        <div className="header-hero-carousel-btn-tochka"></div>
      </div>
    </div>
  );
}
