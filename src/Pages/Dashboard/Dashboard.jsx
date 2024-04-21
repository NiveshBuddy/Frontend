import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import NameBar from "./Components/NameBar";
import SideMenu from "./Components/SideMenu";
import StatsRight from "./Components/StatsRight";
import StratInfo from "./Components/StratInfo";
import Steps from "./Components/Steps";

import classes from "./Styles/Dashboard.module.css";

const Dashboard = () =>{
    return(
        <>
            {/* <Navbar/>
            <div className={classes.page}>
                <SideMenu/>
                <NameBar/>
                <StatsRight/>
                <StratInfo/>
            </div> */}
            <Steps/>
        </>
    )
}

export default Dashboard;