import React from "react";

import HomeLogin from "../HomeLogin";
import HomeNav from "../HomeNav";
import CommonButton from "../CommonComp/CommonButton";

import "./HomeHeader.scss";

const HomeHeader = () => {
    return(
        <header>
            <section className="login">
                <HomeLogin />
            </section>
            <nav className="home_nav">
                <HomeNav />
            </nav>
            <section>
                <h1>Help to the others! Pass some useless belongings to people in needs</h1>
                <div>
                    <CommonButton text="Pass items"/>
                    <CommonButton text="Organize collection"/>
                </div>
            </section>
        </header>
    )
}

export default HomeHeader;