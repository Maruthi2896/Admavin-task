import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/" className="web-title">
          <h1>AdMavin Tasks</h1>
        </Link>
        <ul>
          <Link className="items" to="/task01">
            <li>Task-1</li>
          </Link>
          <Link className="items" to="/task02">
            <li>Task-2</li>
          </Link>
          <Link className="items" to="/task03">
            <li>Task-3</li>
          </Link>
          <Link className="items" to="/task04">
            <li>Task-4</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
