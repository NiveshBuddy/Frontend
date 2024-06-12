import React from "react";
import classes from "../Styles/LastSection.module.css";

const LastSection = () => {
  return (
    <main>
      <div className={classes.main}>
        <div className={classes.content}>
            <div className={classes.left}>
                <div className={classes.head}>
                    Get started for free!
                    <button className={classes.btn}>Register Now!</button>
                </div>
            </div>
            <div className={classes.right}>
                Have a suggestion? Have a query?
                <button className={classes.btn}>Contact Us</button>
            </div>
        </div>
      </div>
    </main>
  );
};

export default LastSection;
