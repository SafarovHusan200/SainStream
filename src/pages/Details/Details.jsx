import React from "react";
import "./detail.css";
import StreamContainer from "../../containers/streamBrand/stream.container";
import WatchingContainer from "../../containers/watching/watching.container";

export default function Details() {
  return (
    <div className="details">
      <StreamContainer />
      <WatchingContainer />
    </div>
  );
}
