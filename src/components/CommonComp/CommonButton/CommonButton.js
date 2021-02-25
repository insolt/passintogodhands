import React from "react";
import { Link } from "react-router-dom";

import "./CommonButton.scss";

const CommonButton = ({ text, to }) => {
    return(
        <Link to={to}><button className="button">{text}</button></Link>
    )
}

export default CommonButton;