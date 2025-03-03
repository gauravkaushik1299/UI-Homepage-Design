import React from "react";
import "./TopBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = () => {
  return (
    <header className="topbar">
      {/* Left section of the topbar with logo */}
      <div className="topbar-left">
        <h1 className="logo">LOGO</h1>
      </div>
      
      {/* Middle section of the topbar with search bar and filter button */}
      <div className="topbar-middle">
        <div className="search-container">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          <input type="text" placeholder="Search here..." />
          <button className="filter-button">
            <div className="filter-container">
              <img
                src={require("../../Assets/TopBar/Component 39 (2)@2x.jpg")}
                alt="Filter"
                className="filter-icon"
              ></img>
              Filter
            </div>
          </button>
        </div>
      </div>
      
      {/* Right section of the topbar with seller button */}
      <div className="topbar-right">
        <button className="seller-button">Become a Seller</button>
      </div>
    </header>
  );
};

export default TopBar;
