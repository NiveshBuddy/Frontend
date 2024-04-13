import React from "react";
import classes from "../Styles/main.module.css"
import image from "../Assets/main.svg"

const MainContent = () => {
    return (
    <div className={classes.section}>
        <div className={classes.container}>
            <div className={classes.content_section}>
                <div className={classes.title}>
                    About Us
                </div>
                <div className={classes.content}>
                    <p>
                    At NiveshBuddy, we're dedicated to revolutionizing the way you invest. Our advanced fintech solution empowers you to backtest equity strategies with ease, giving you the confidence to make informed decisions and optimize your portfolio in the ever-evolving Indian markets.
                    </p>
                    <button className={classes.button}>
                        Read More
                    </button>
                </div>
            </div>
            <div className={classes.image_section}>
                <img src={image} alt=""/>
            </div>
        </div>
    </div>

    )
}

export default MainContent;