import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import { nav } from "../../data/Data";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const location = useLocation();

  // Function to close the nav list
  const closeNav = () => setNavList(false);

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo.png" alt="logo" />
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link
                    to={list.path}
                    className={location.pathname === list.path ? "active" : ""}
                    onClick={closeNav} // Close nav on click
                  >
                    {list.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <Link to="/register" className="Navbtn1" onClick={closeNav}>
              <i className="fa fa-sign-out"></i> Register
            </Link>
          </div>
          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
