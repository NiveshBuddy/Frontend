import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import NameBar from "./Components/NameBar";
import SideMenu from "./Components/savedStrats";
import Nav2 from "./Components/Nav2";
import StratInfo from "./Components/StratInfo";
import Steps from "./Components/Steps";

// import classes from "./Styles/Dashboard.module.css";

const Dashboard = () =>{
    return(
        <>
            <Navbar/>
            <div className="page">  
                <SideMenu/>
                <NameBar/>
                <Nav2/>
                <StratInfo/>
            </div>
            <Steps/>
        </>
    )
}

export default Dashboard;