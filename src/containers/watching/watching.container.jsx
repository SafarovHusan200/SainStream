import React from "react";
import "./watching.css";
import WatchingCardComponent from "./watching-card.component";
import guardians from "../../assets/watching/Guard.png";
import theLast from "../../assets/watching/TheLast.png";
import godzilla from "../../assets/watching/Godzilla.png";
import arrowNext from "../../assets/streamBrand/arrow-right.png";

export default function WatchingContainer() {
  return (
    <div className="watching-container">
      <div className="watching-title">Continue Watching</div>
      <div className="watching-cards">
        <WatchingCardComponent
          img={guardians}
          name={"Guardians of the Galaxy Vol. 3"}
          year={"2023"}
          timeStart={"59 : 05"}
          timeEnd={"02 : 23 : 45"}
        />
        <WatchingCardComponent
          img={theLast}
          name={"The Last of Us - Episode 4"}
          year={"2023"}
          timeStart={"25 : 05"}
          timeEnd={"53 : 45"}
        />
        <WatchingCardComponent
          img={godzilla}
          name={"Godzilla"}
          year={"2022"}
          timeStart={"59 : 05"}
          timeEnd={"02 : 23 : 45"}
        />
      </div>

      <div className="watching-errow-next">
        <img src={arrowNext} alt="" />
      </div>
    </div>
  );
}
