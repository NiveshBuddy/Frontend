import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../Assets/NiveshBuddy.svg"

const Navbar = () => {
  return (
    <nav>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <ul className={classes.links}>
        <li>
          <a href="#top" className={classes.a}>Home</a>
        </li>
        <li>
          <a href="#top" className={classes.a}>About Us</a>
        </li>
        <li className={classes.dropdown}>
          <a href="#top" className={classes.a}>
            Tutorials
          </a>
          <div className={classes.dropdown_content}>
            <a href="#top">Link 1</a>
            <a href="#top">Link 2</a>
            <a href="#top">Link 3</a>
          </div>
        </li>
        <li>
          <a href="#top" className={classes.a}>Forum</a>
        </li>
      </ul>
      <div className={classes.navBtn}>Dashboard</div>
    </nav>
  );
};

export default Navbar;
