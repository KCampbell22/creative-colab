import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div class="container h-100 d-flex flex-column justify-content-center">
      <div class="row">
        <div class="col-lg-6 mx-auto">
          <div class="card">
            <div class="card-body">
              <h1 class="text-center mb-5">Welcome to My Writing App</h1>
              <form>
                <div class="form-group">
                  <label for="username">Username:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    name="username"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary btn-block my-4"
                  style={{ backgroundColor: "#3490dc" }}
                  onClick={() => {
                    // use local storage to store the the login status
                    if (localStorage.getItem("login") === "true") {
                      localStorage.setItem("login", "false");
                    }
                    localStorage.setItem("login", "true");
                    // redirect to the home page
                    window.location.href = "/feed";
                  }}
                >
                  Login
                </button>
                <div class="text-center">
                  <a href="#">Forgot Password?</a>
                  <p>
                    Don't have an account? <a href="#">Sign Up</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
