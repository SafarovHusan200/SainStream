import React from "react";
import "./watching-card.css";
import timing from "../../assets/watching/timing.png";

export default function WatchingCardComponent({
  img,
  name,
  year,
  timeStart,
  timeEnd,
}) {
  return (
    <div
      className="watching-card-component"
      style={{
        backgroundImage: `linear-gradient(transparent, transparent, transparent, #1e1e1e), url(${img})`,
      }}
    >
      <h3 className="watching-movie-name">{name}</h3>
      <div className="watching-movie-year">{year}</div>

      <div className="watching-times">
        <div className="watching-start-time">{timeStart}</div>
        <img src={timing} alt="" />
        <div className="watching-start-end">{timeEnd}</div>
      </div>
    </div>
  );
}
