import React from "react";
import classes from "../Styles/Nav2.module.css"; 

const Nav2 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.available}>
          <span className={classes.head}>Available Balance</span>
          <span className={classes.backtest}>Backtests:</span>
          <span className={classes.credits}>Credits:</span>
          <span className={classes.plans}>Check Plans:</span>
          <span className={classes.data}>Data Available: 2 Years</span>
        </div>
        {/* <div className={classes.charts}>
          <span className={classes.head}>View Charts</span>
        </div> */}
      </div>
    </div>
  );
};

export default Nav2;
