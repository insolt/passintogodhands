import React from "react";

import HomeLogin from "../HomeLogin";
import HomeNav from "../HomeNav";
import CommonButton from "../CommonComp/CommonButton";
import "./Logout.scss";

const Logout = () => {
    return(
        <header id="logout_start">
            <div className="container">
                <div className="logout_header">
                    <div className="logout_guide">
                        <div className="logout_guide_menus">
                            <section className="logout_login">
                                <HomeLogin />
                            </section>
                            <nav className="logout_nav">
                                <HomeNav />
                            </nav>
                        </div>  
                    </div> 
                    <div className="logout_msg">
                        <div className="logout_msg_title">
                            <p>You have logged out successfuly</p>
                        </div>
                        <div className="logout_msg_btn">
                           <CommonButton text="Home page" to="/" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Logout;