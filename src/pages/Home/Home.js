import React from "react";
import "./style.css";
import HeaderContainer from "../../containers/header/header.container";
import HeaderHero from "../../containers/header/header-hero";

function Home() {
  return (
    <div className="home">
      <HeaderContainer />
      <HeaderHero />
    </div>
  );
}

export default Home;
