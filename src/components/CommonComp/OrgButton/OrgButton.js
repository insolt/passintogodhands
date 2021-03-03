import React from 'react';

import "./OrgButton.scss";

const OrgButton = ({ organization, desc, onDone }) => {
    
    const handleClick = (e) => {
        onDone(e)
    }


    return (
        <button data-value={organization} className="org_btn" onClick={handleClick}>{desc}</button>
    );
}

export default OrgButton;