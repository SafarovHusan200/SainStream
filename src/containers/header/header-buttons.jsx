import React from "react";
import "./header-button.css";
import { iconSearch, iconBell, iconArrow } from "./icons";
import iconAvatar from "../../assets/icon/Avatar.png";

export default function HeaderButtonsComponents() {
  return (
    <div className="header-buttons-component">
      <div className="header-buttons-components__icon">{iconSearch}</div>
      <div className="header-buttons-components__icon">{iconBell}</div>
      <div className="header-buttons-components__avatar">
        <img src={iconAvatar} alt="" />
        <div className="header-buttons-component__avatar-arrow">
          {iconArrow}
        </div>
      </div>
    </div>
  );
}
