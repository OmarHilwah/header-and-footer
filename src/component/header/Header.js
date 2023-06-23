import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="main-header">
      <div className="header-top">
        <div className="social-icon">
          <i className="fa-brands fa-pinterest fa-xl" />
          <i className="fa-brands fa-twitter fa-xl" />
          <i className="fa-brands fa-facebook fa-xl" />
        </div>
        <div className="login">
          <i className="fa-solid fa-user fa-xl" />
          <button className="logout-button">LOG OUT</button>
        </div>
        {/* <div className="currency">
          <label>currency</label>
          {/* <select name="currency">
            <option value="USD">USD $</option>
            <option value="JOD">JOD</option>
            <option value="GBB">GBB</option>
          </select> */}
        {/* </div> */}
      </div>
      <hr style={{ width: "90%", margin: "auto" }} />
      <div className="bottom-header">
        <div className="logo">logo</div>
        <div className="second-header-bootom">
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Products</a>
          </div>
          {/* <div className="search">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div> */}
          <div className="cart">
            <a href="#">Cart</a>
            <i className="fa-solid fa-cart-shopping" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
