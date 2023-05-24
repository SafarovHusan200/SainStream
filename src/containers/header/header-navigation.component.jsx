import React from "react";
import "./header-navigation.css";

export default function HeaderNavigationComponent() {
  return (
    <>
      <ul className="header-navigation-component">
        <li className="header-navigation-component__icon active">Home</li>
        <li className="header-navigation-component__icon ">Discover</li>
        <li className="header-navigation-component__icon ">Movie Release</li>
        <li className="header-navigation-component__icon ">Forum</li>
        <li className="header-navigation-component__icon ">About</li>
      </ul>
    </>
  );
}
