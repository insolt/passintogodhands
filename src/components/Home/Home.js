import React from "react";

import HomeHeader from "../HomeHeader";
import HomeThreeColumns from "../HomeThreeColumns";
import HomeSimpleSteps from "../HomeSimpleSteps";
import HomeAboutUs from "../HomeAboutUs";
import HomeWhoWeHelp from "../HomeWhoWeHelp";
import HomeContact from "../HomeContact";

const Home = () => {
    return(
        <div>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSimpleSteps />
            <HomeAboutUs />
            <HomeWhoWeHelp />
            <HomeContact />
        </div>
    )
}

export default Home;