import React from "react";
import "./SideMenu.css";

export default function Sidemenu() {
  return (
    <div className="col-2 side-menu">
      <nav id="side-bar">
        <a href="#" className="side-menu-item">
          Home
        </a>
        <a href="#" className="side-menu-item">
          Browse
        </a>
        <a href="#" className="side-menu-item">
          Colaborators
        </a>
        <a href="#" className="side-menu-item">
          Archive
        </a>
        <a href="#" className="side-menu-item">
          Messages
        </a>
        <a href="#" className="side-menu-item">
          Profile
        </a>
      </nav>
    </div>
  );
}
