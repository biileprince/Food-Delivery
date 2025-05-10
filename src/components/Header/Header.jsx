import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-overlay"></div>
      <div className="header-contents">
        <h1 className="header-title">
          Savor Excellence,
          <br />
          Delivered to Your Door
        </h1>
        <p className="header-description">
          Explore culinary masterpieces crafted by top chefs using premium
          ingredients. From sizzling appetizers to decadent desserts -
          restaurant quality meals, made convenient just for you.
        </p>
        <button className="cta-button">
          Explore Menu
          <svg className="cta-icon" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </button>
      </div>
      <div className="scroll-indicator"></div>
    </header>
  );
};

export default Header;
