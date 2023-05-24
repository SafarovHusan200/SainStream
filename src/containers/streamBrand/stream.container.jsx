import React from "react";
import "./stream.css";
import StreamCardComponent from "./stream-card.component";
import iconDisnep from "../../assets/streamBrand/Disnep.png";
import iconNetflix from "../../assets/streamBrand/netflix.png";
import iconHbo from "../../assets/streamBrand/HBO.png";
import iconPixar from "../../assets/streamBrand/pixar.png";
import iconMarvel from "../../assets/streamBrand/marvel.png";
import iconStar from "../../assets/streamBrand/starWars.png";
import iconNation from "../../assets/streamBrand/natinal.png";
import iconArrowNext from "../../assets/streamBrand/arrow-right.png";

export default function StreamContainer() {
  return (
    <div className="stream-brand-container">
      <StreamCardComponent logo={iconDisnep} />
      <StreamCardComponent logo={iconNetflix} />
      <StreamCardComponent logo={iconHbo} />
      <StreamCardComponent logo={iconPixar} />
      <StreamCardComponent logo={iconMarvel} />
      <StreamCardComponent logo={iconStar} />
      <StreamCardComponent logo={iconNation} />
      <div className="stream-brand-arrow-next">
        <img src={iconArrowNext} alt="" />
      </div>
    </div>
  );
}
