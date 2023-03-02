// navbar component containing acces to weekly status of each habit

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HabitStatus from "./HabitStatus";
import App from "./App";
const Navbar = () => {
  return (
    <>
      <Router>
        <nav className="navbar-container">
          <div className="navbar-header">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5026/5026374.png"
              alt="habit-tracker"
            />
            <h2>HABITS TRACKER</h2>
          </div>

          <div className="navbar-list">
            <ul>
              <i class="fa-solid fa-house"></i>
              <li>
                <Link to="/">HOME</Link>
              </li>
            </ul>
            <ul>
              <i class="fa-solid fa-calendar-days"></i>
              <li>
                <Link to="/habitStatus">WEEKLY STATUS</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/habitStatus" element={<HabitStatus />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default Navbar;
