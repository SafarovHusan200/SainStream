import React from "react";
import HeaderLogoComponent from "./header-logo.component";
import HeaderNavigationComponent from "./header-navigation.component";
import HeaderButtonsComponents from "./header-buttons";
import "./header.css";

export default function HeaderContainer() {
  return (
    <div className="header-container">
      <div className="header-component">
        <HeaderLogoComponent />
        <HeaderNavigationComponent />
        <HeaderButtonsComponents />
      </div>
    </div>
  );
}
