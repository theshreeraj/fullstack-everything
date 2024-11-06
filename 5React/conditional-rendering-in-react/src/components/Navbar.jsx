import React, { useState } from "react";
import "./Navbar.css";
import LogoutBtn from "./LogoutBtn";
import LoginBtn from "./LoginBtn";

const Navbar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <p>Joshi</p>
        </div>

        <div className="menu">
          <p>About Us</p>
          <p>Contact</p>
          <p>Features</p>
        </div>

        <div>{isLoggedIn ? <LogoutBtn /> : <LoginBtn />}</div>
      </div>
    </>
  );
};

export default Navbar;
