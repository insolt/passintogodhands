import React, { useState } from 'react';

import OrgsListItem from "../CommonComp/OrgsListItem";
import funds from "./Funds.js";
import nonGovOrgs from "./NonGovOrgs.js";
import localCollections from "./LocalCollections.js";
import "./HomeWhoWeHelp.scss";

const HomeWhoWeHelp = () => {
    const organizations = [funds, nonGovOrgs, localCollections]; 
    const folders = [
        {
            id: 1,
            organization: 'funds',
            desc: "Funds"
        },
        {
            id: 2,
            organization: 'nonGovOrgs',
            desc: "Non-gov organizations"
        },
        {
            id: 3,
            organization: 'localCollections',
            desc: "Local Collections"
        }];
    const elementsPerPage = 3;
    
    const [activeFolder, setActiveFolder] = useState(1);
    const [shownOrganizationsList, setShownOrganizationsList] = useState(organizations[0].slice(0, 3));
    const [arrayOfPages, setArrayOfPages] = useState([
        {
            id: 1,
            page: 1
        },
        {
            id: 2,
            page: 2
        },
        {
            id: 3,
            page: 3
        }]);
    const [activePage, setActivePage] = useState(1);
   

    const handleClickFolder = (e) => {
        setActiveFolder(+e.target.dataset.value);
        setShownOrganizationsList(organizations[+e.target.dataset.value-1].slice(0, elementsPerPage))

        let myArr = [];
        for (let i = 1; i <= (Math.ceil((organizations[+e.target.dataset.value-1].length)/elementsPerPage)); i++) {
            myArr.push({id: i, page: i});
        }
        setArrayOfPages(myArr);
        setActivePage(1);
    }

    const handleClickPage = (e) => {
        let startIndex = (+e.target.dataset.value - 1) * elementsPerPage;
        let endIndex = (+e.target.dataset.value - 1) * elementsPerPage + elementsPerPage;
        setShownOrganizationsList(organizations[activeFolder-1].slice(startIndex, endIndex));
        setActivePage(+e.target.dataset.value);
    }



    return(
        <section id="org">
            <div className="container">
                <div className="org">
                    <p className="org_title">
                        Who do we help?
                    </p>
                    <div className="org_pagin">
                        <div className="org_menu">
                            <ul className="org_menu_list">
                                {
                                    folders.map(el => (<li key={el.id} className={el.id === activeFolder ? "org_btn_element org_btn_active" : "org_btn_element"} data-value={el.id} desc={el.desc} onClick={handleClickFolder}>{el.desc}</li>))
                                }
                            </ul>
                        </div>
                      
                        <div className="org_description">
                            <p className="org_description_text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a totam veritatis nesciunt debitis, voluptas qui? Necessitatibus dolore facilis esse!
                            </p>
                        </div>
                        <div className="org_list">
                             {(!shownOrganizationsList) ? (<h2>Loading data. Please wait...</h2>) : (
                                 shownOrganizationsList.map(el => (
                                     <li className="org_list_elem" key={el.id}><OrgsListItem name={el.name} desc={el.description} items={el.items}/></li>
                                     ))
                             )}
                        </div>
                        <div className="org_pages">
                            {arrayOfPages.map(el => <div className={el.page === activePage ? "org_pages_element page_active" : "org_pages_element"} key={el.id} data-value={el.id} onClick={handleClickPage}>{el.page}</div>)}
                        </div>
                    </div>
                </div>                
            </div>
        </section>
    )
}

export default HomeWhoWeHelp;