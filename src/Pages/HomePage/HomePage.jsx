import React from "react";
import Landing from "./Components/landing";
import SectionTwo from "./Components/SectionTwo";
// import { StickyScrollRevealDemo } from "./Components/ScrollSection";
import PicHead from "./Components/PicHead"
import LastSection from "./Components/LastSection"

const HomePage = () => {
    return (
        <>
            <Landing/>
            <SectionTwo/>
            {/* <StickyScrollRevealDemo/> */}
            <PicHead/>
            <LastSection/>
        </>
    )
}

export default HomePage;