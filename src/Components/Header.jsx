import React from "react";
import "../App.css";
import ThemeButton from "./ThemeButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <header>
      <div className="logo">
        {/* Insert your logo image here */}
        <img src="https://5.imimg.com/data5/ANDROID/Default/2022/7/OV/BZ/OY/88779524/product-jpeg-500x500.jpg" alt="Logo" />
      </div>
      <div className="menu">
        <Link to="/home" className="menu-link">
          <button className="menu-button">Home</button>
        </Link>
        <Link to="/about" className="menu-link">
          <button className="menu-button">About</button>
        </Link>
        <Link to="/product" className="menu-link">
          <button className="menu-button">Product</button>
        </Link>
        <Link to="/cart" className="menu-link">
          <button className="menu-button">Cart: {cartItems.length}</button>
        </Link>
        
      </div>
    </header>
  );
}

export default Header;
