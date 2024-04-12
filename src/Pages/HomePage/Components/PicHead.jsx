import React from "react";
import classes from "../Styles/PicHead.module.css"
import img1 from "../Assets/img1.jpg"

const PicHead = () => {
    return (
        <main>
            <div className={classes.content}>
                <div className={classes.head}>
                    <div className={classes.text}>
                        Invest with Confidence with Us
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PicHead;