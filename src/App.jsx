import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from "./components/UserList";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <Router>
      <div className="navbar">
        <div className="nav-list">
          <ul>
            <li className="nav-items">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-items">
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li className="nav-items">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-items">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>WELCOME</h1>
                
                <UserList />
              </>
            }
          />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route
            path="/about"
            element={<h2 style={{ textAlign: "center" }}>About Page</h2>}
          />
          <Route
            path="/contact"
            element={<h2 style={{ textAlign: "center" }}>Contact Page</h2>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;