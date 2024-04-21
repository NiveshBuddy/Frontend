import React from "react";
import classes from "../Styles/NameBar.module.css"

const NameBar = () => {
    return ( 
        <div className={classes.container}>
            <div className={classes.name}>
                Hi, Arnav
            </div>
        </div>
    )
}

export default NameBar;