import React from "react";
import "./style.css";
import { navbar } from "../../utils";
import logo from "../../assets/icon/SS.png";
import search from "../../assets/icon/search.png";
import ball from "../../assets/icon/Icon.png";
import user from "../../assets/icon/Image.png";
import SainStream from "../../assets/SaintStream.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
        <img className="sainstream" src={SainStream} alt="" />
      </div>
      <ul className="item_list">
        {navbar.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>

      <main className="main">
        <div className="search">
          <img className="search" src={search} alt="" />
        </div>
        <div className="ball">
          <img className="search" src={ball} alt="" />
        </div>
        <div className="user">
          <img className="search" src={user} alt="" />
        </div>
      </main>
    </nav>
  );
}

export default Navbar;
