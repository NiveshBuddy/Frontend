import React from "react";
import classes from "./Footer.module.css"
import logo from "../../Assets/niveshBuddy copy.svg"

const Footer = () => {
  return (
    <foot>
      <div className={classes.about}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.para}>
          <p>
            Your go-to for mastering Indian equity markets. Start your journey
            to financial prosperity today!
          </p>
        </div>
      </div>
      <div className={classes.links}>
        <div className={classes.one}>
          <ul className={classes.flink}>
            <li>
              <a href="#top" className={classes.f}>About Us</a>
            </li>
            <li>
              <a href="#top" className={classes.f}>Jobs</a>
            </li>
            <li>
              <a href="#top" className={classes.f}>Docs</a>
            </li>
          </ul>
        </div>
        <div className={classes.two}>
          <ul className={classes.flink}>
            <li>
              <a href="#top" className={classes.f}>Terms and Conditions</a>
            </li>
            <li>
              <a href="#top" className={classes.f}>Privacy Policy</a>
            </li>
            <li>
              <a href="#top" className={classes.f}>Cookie Policy</a>
            </li>
          </ul>
        </div>
        <div className={classes.three}>
          <ul className={classes.flink}>
            <li>Connect with Us!</li>
            <li>nivesh.buddy@gmail.com</li>
            <li>+91-xxxxx-xxxxx</li>
          </ul>
        </div>
      </div>
      
    </foot>
  );
};

export default Footer;