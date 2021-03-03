import React from "react";

import HomeNavItem from "../CommonComp/HomeNavItem";

import "./HomeNav.scss";

const HomeNav = () => {
    return(
        <ul className="home_nav">
            <HomeNavItem text="Start" to="home_start"/>
            <HomeNavItem text="What's the matter?" to="whats-on"/>
            <HomeNavItem text="About Us" to="about-us"/>
            <HomeNavItem text="Organizations" to="org"/>
            <HomeNavItem text="Contact" to="contact"/>
        </ul>
    )
}

export default HomeNav;