import React from "react";
import "./SideMenu.css";

export default function Sidemenu() {
  return (
    <div className="side-menu col-12">
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
