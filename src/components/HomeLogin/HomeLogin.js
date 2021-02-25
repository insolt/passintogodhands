import React from "react";

import HomeLoginItem from "../CommonComp/HomeLoginItem";

import "./HomeLogin.scss";

const HomeLogin = () => {
    return(
        <>
            <HomeLoginItem text="Login" to="/login"/>
            <HomeLoginItem text="Sign in" to="/register"/>
        </>
    )
}

export default HomeLogin;