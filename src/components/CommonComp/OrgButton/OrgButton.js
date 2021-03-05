import React from 'react';

import "./OrgButton.scss";

const OrgButton = ({ index, desc, onDone }) => {
    
    const handleClick = (e) => {
        onDone(e)
    }


    return (
        <button data-value={index} className="org_btn" onClick={handleClick}>{desc}</button>
    );
}

export default OrgButton;