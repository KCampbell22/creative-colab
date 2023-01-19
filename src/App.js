import { useState, useEffect } from "react";
import Login from "./components/common/Login";
import Feed from "./components/common/Feed";
import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn);
  }, [loggedIn]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </Router>
    </>
  );
}
