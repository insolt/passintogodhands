import React from "react";
import { Link } from "react-scroll";

import "./HomeNavItem.scss";

const HomeNavItem = ({ text, to }) => {
    return(
        <li><Link activeClass="active" to={to} spy={true} smooth={true} offset={0} duration={800}>{text}</Link></li>
    )
}

export default HomeNavItem;