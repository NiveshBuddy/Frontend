import React from "react";
import classes from "../Styles/SideMenu.module.css"

const SideMenu = () => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.top}>
                    <h3>Saved Strategies</h3>
                    <input type="text" placeholder="Search..." className={classes.searchBar} />
                </div>
                <div className={classes.strats}>
                    <div className={classes.btn}>Strat 1</div>
                </div>
                <div className={classes.helpBtn}>
                    <div className={classes.help}>Need any Help?</div>
                </div>
            </div>
        </div>
    )
}

export default SideMenu;