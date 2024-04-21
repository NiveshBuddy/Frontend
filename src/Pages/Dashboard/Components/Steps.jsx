import React from "react";
import classes from "../Styles/Steps.module.css"

const Steps = () => {
    return (
        <div className={classes.contain}>
            <div className={classes.btnss}>

                <div className={classes.step}>
                    <span className={classes.text}>
                        Step 1
                    </span>
                </div>

                <div className={classes.step}>
                    <span className={classes.text}>
                        Step 2
                    </span>
                </div>

                <div className={classes.step}>
                    <span className={classes.text}>
                        Step 3
                    </span>
                </div>

                <div className={classes.step}>
                    <span className={classes.text}>
                        Step 4
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Steps;