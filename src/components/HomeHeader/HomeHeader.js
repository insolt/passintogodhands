import React from "react";

import HomeLogin from "../HomeLogin";
import HomeNav from "../HomeNav";
import CommonButton from "../CommonComp/CommonButton";

import "./HomeHeader.scss";

const HomeHeader = () => {
    return(
        <header id="home_start">
            <div className="container">
                <div className="home_header">
                    <div className="home_image"></div>
                    <div className="home_guide">
                        <section className="home_login">
                            <HomeLogin />
                        </section>
                        <nav className="home_nav">
                            <HomeNav />
                        </nav>
                        <section className="home_intro">
                            <div className="title">
                                <p>Help to the others! Pass some useless belongings to people in needs</p>
                            </div>
                            <div className="btn">
                                <CommonButton text="Pass items" to="/login" />
                                <CommonButton text="Organize collection" to="/login" />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HomeHeader;