import React from "react";

export default function Navbar() {
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
      </nav>
    </div>
  );
}
