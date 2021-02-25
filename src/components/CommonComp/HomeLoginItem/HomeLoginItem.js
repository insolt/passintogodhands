import React from "react";
import { Link } from "react-router-dom";

import "./HomeLoginItem.scss";

const HomeLoginItem = ({ text, to }) => {
    return(
        <Link to={to}><button className="login_btn">{text}</button></Link>
    )
}

export default HomeLoginItem;