import React from "react";
import "./header-hero.css";
import HeaderHeroTitleComponent from "./header-hero_title.component";
import HeaderHeroDateComponent from "./header-hero_date.component";
import HeaderHeroDescriptionComponent from "./header-hero_description.component";
import HeaderHeroBtns from "./header-hero_btns";

export default function HeaderHero() {
  return (
    <div className="header-hero">
      <HeaderHeroTitleComponent />
      <HeaderHeroDateComponent />
      <HeaderHeroDescriptionComponent />
      <HeaderHeroBtns />
    </div>
  );
}
