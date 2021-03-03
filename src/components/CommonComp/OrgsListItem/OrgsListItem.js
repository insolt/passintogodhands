import React from 'react';

import "./OrgsListItem.scss";

const OrgsListItem = ({ name, desc, items }) => {
    return (
        <div className="org_list_item">
            <div className="org_list_item-main">
                <div className="org_list_item-title">{name}</div>
                <div className="org_list_item-desc">{desc}</div>
            </div>
            <div className="org_list_item-items">{items}</div>
        </div>
    );
}

export default OrgsListItem;
