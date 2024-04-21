import React from "react";
import Landing from "./Components/landing";
import SectionTwo from "./Components/SectionTwo";
import { StickyScrollRevealDemo } from "./Components/ScrollSection";
import PicHead from "./Components/PicHead"
import LastSection from "./Components/LastSection"
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


const HomePage = () => {
    return (
        <>
            <Navbar/> 
            <Landing/>
            <SectionTwo/>
            <StickyScrollRevealDemo/>
            <PicHead/>
            <LastSection/>
            <Footer/>
        </>
    )
}

export default HomePage;