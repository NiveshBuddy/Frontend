import React from "react";
import Landing from "./Components/landing";
import SectionTwo from "./Components/SectionTwo";
import PicHead from "./Components/PicHead"
import LastSection from "./Components/LastSection"

const HomePage = () => {
    return (
        <>
            <Landing/>
            <SectionTwo/>
            <PicHead/>
            <LastSection/>
        </>
    )
}

export default HomePage;