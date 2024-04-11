import React from "react";
import classes from "../Styles/Landing.module.css"

const Landing = () => {
    return(
        <main>
        <div className={classes.land}>
            <div className={classes.boxLand}>
                <div className={classes.head}>
                    Simplify Equity Investing with NiveshBuddy
                </div>
                <div className={classes.subHead}>
                    <h3>Your ultimate fintech companion for data-driven equity investing in India</h3>
                    <button>Start Backtesting for Free!</button>
                </div>
            </div>
            </div>
        </main>
    )
}

export default Landing;