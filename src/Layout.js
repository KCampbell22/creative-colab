import React from "react";
import Navbar from "./components/common/Navbar";
import Sidemenu from "./components/common/SideMenu";

export default function Layout({ children }) {
  return (
    <div className="container-fluid" id="root">
      <Navbar />
      <Sidemenu />
      {children}
    </div>
  );
}
