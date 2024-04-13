import React from "react";
import classes from "./Footer.module.css"
// import logo from "../../Assets/niveshBuddy copy.svg"

const Footer = () => {
  return (
    <footer>
      <div className={classes.about}>
        <div className={classes.logo}>
          <img src="https://res.cloudinary.com/dnrxsykwg/image/upload/v1713003276/niveshBuddy_copy_tbaysp.svg" alt="logo" />
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
      
    </footer>
  );
};

export default Footer;