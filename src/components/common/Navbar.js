import React from "react";
import { useState } from "react";
import { redirect } from "react-router-dom";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUserLog = () => {
    // set the state in the local storage
    if (localStorage.getItem("login") === "true") {
      localStorage.setItem("login", false);

      // redirect to the home component
      window.location.href = "/";
    } else {
      localStorage.setItem("login", true);
      // redirect to the login component
    }
    setLoggedIn(!loggedIn);
  };

  useState(() => {
    if (localStorage.getItem("login") === "true") {
      return true;
    } else {
      return redirect("/login");
    }
  });
  return (
    <div className="mb-5">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          My App
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Browse
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Collaborators
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Archive
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Messages
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Profile
              </a>
            </li>
          </ul>
        </div>
        <button type="button" onClick={handleUserLog} class="btn btn-primary">
          Log Off
        </button>
      </nav>
    </div>
  );
}
