import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../Assets/NiveshBuddy.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <ul className={classes.links}>
        <li>
          <div className={classes.a}>
            <Link
              className={window.location.pathname === "/" ? "active" : ""}
              to={"/"}
            >
              Home
            </Link>
          </div>
        </li>
        <li>
          <div  className={classes.a}>
          <Link
              className={window.location.pathname === "/About" ? "active" : ""}
              to={"/About"}
            >
            About Us
            </Link>
          </div>
        </li>
        <li className={classes.dropdown}>
          <div className={classes.a}>
            Tutorials
          </div>
          <div className={classes.dropdown_content}>
            <a href="#top">Link 1</a>
            <a href="#top">Link 2</a>
            <a href="#top">Link 3</a>
          </div>
        </li>
        <li>
          <div className={classes.a}>
            Forum
          </div>
        </li>
      </ul>
      <div className={classes.navBtn}>Dashboard</div>
    </nav>
  );
};

export default Navbar;
