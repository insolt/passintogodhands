import React from "react";

import HomeLoginItem from "../CommonComp/HomeLoginItem";

import "./HomeLogin.scss";

const HomeLogin = () => {
    return(
        <ul className="home_login">
            <HomeLoginItem text="Login" to="/login"/>
            <HomeLoginItem text="Sign up" to="/register"/>
        </ul>
    )
}

export default HomeLogin;