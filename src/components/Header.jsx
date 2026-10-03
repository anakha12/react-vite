import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [loginBtn, SetLoginBtn]=useState("Login")

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button 
            className="login-btn"
            onClick={()=>{
              loginBtn=="Login"
                ? SetLoginBtn("Logout")
                : SetLoginBtn("Login");
            }}
            >
              {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header