import React from "react";
import classes from "../Styles/StratInfo.module.css"

const StratInfo = () => {
    return ( 
        <div className={classes.stratBox}>
            <div className={classes.info}>
                <div >
                    <label htmlFor="stratname" className={classes.Name}>Strategy Name</label>
                    <br/>
                    <input type="text" id="stratname" placeholder="Enter name of Strategy" className={classes.input}/>
                </div>
                <div >
                        <label htmlFor="date" className={classes.dates}>Date</label>
                        <br/>
                        <input type="date" id="date" placeholder="From" className={classes.input}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="date" id="date" placeholder="Till" className={classes.input}/>
                </div>
            </div>
            <div className={classes.addBtn}>
                Run Backtest
            </div>
        </div>
    )
}

export default StratInfo;