import React from "react";
import "./Header.css";
import images from "./images/Amazon-Logo-White.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <div className="amazon-logo-box">
        <img src={images} className="logo-amazon" />
      </div>
      <div className="text-box">
        <input type="text" className="input-search" />
        <SearchIcon className="input-nav-icon" />
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="one-nav">Hello guest</span>
          <span className="Two-nav">Sign In</span>
        </div>
        <div className="header-option">
          <span className="one-nav">Return</span>
          <span className="Two-nav">&Orders</span>
        </div>
        <div className="header-option">
          <span className="one-nav">Prime</span>
          <span className="Two-nav">vedio</span>
        </div>
        <div className="ShoppingBasketIcon">
          <ShoppingBasketIcon />
          <span className="ShoppingBasketIcon1">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
