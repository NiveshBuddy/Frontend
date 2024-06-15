import React from "react";
import classes from "../Styles/Landing.module.css";
import { Link } from "react-router-dom";
// import Signup from "../../Login_signup/Components/SignIn";

const Landing = () => {
  return (
    <main>
      <div className={classes.land}>
        <div className={classes.boxLand}>
          <div className={classes.contentBox}>

            <div className={classes.headBox}>

              <div className={classes.head}>
                Simplify Equity Investing with NiveshBuddy
              </div>
              <div className={classes.subHead}>
                <h3>
                  Your ultimate fintech companion for data-driven equity investing
                  in India
                </h3>
                <button className={classes.btn}>
                  <Link
                    className={window.location.pathname === "/Signup" ? "active" : ""}
                    to={"/Signup"}
                  >
                    Start Backtesting for Free!
                  </Link>
                </button>
              </div>
            </div>

            <div className={classes.mascot}>
              {/* <img src="https://res.cloudinary.com/dsu2kv8ym/image/upload/v1718446867/main_igilnx.svg" alt="" /> */}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
