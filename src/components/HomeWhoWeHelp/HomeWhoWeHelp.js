import React, { useState, useEffect } from "react";

import OrgButton from "../CommonComp/OrgButton";
import OrgsListItem from "../CommonComp/OrgsListItem";
import funds from "./Funds.js";
import nonGovOrgs from "./NonGovOrgs.js";
import localCollections from "./LocalCollections.js";
import "./HomeWhoWeHelp.scss";

const HomeWhoWeHelp = () => {
    const myFolders = [funds, nonGovOrgs, localCollections];
    const [shownOrganizationsList, setShownOrganizationsList] = useState([]);
    const [activeFolder, setActiveFolder] = useState();
    const [arrayOfPages, setArrayOfPages] = useState([]);
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
    const pageNumbers = document.querySelectorAll('.org_pages_element');
    const folderNames = document.querySelectorAll('.org_btn');
    
    
    /**
     * Initial  state
    */
    useEffect(() => {    
        
        if (folderNames.length && pageNumbers.length) {
            pageNumbers.forEach(el => el.classList.remove('page_active'));
            folderNames.forEach(el => el.classList.remove('org_btn_active'));
            folderNames[0].classList.add('org_btn_active');
            pageNumbers[0].classList.add('page_active');  
        }

        setActiveFolder(myFolders[0]);
        setShownOrganizationsList(myFolders[0].slice(0, elementsPerPage))

        let myArr = [];
        for (let i = 1; i <= (Math.ceil((myFolders[0].length)/elementsPerPage)); i++) {
            myArr.push(i);
        }
        setArrayOfPages(myArr);
              
    }, [])



    const handleClickFolder = (e) => {
        setActiveFolder(myFolders[+e.target.dataset.value-1]);
        setShownOrganizationsList(myFolders[+e.target.dataset.value-1].slice(0, elementsPerPage))

        let myArr = [];
        for (let i = 1; i <= (Math.ceil((myFolders[+e.target.dataset.value-1].length)/elementsPerPage)); i++) {
            myArr.push(i);
        }
        setArrayOfPages(myArr);

        if (folderNames.length) {
            folderNames.forEach(el => el.classList.remove('org_btn_active'));
            folderNames[+e.target.dataset.value-1].classList.add('org_btn_active');
        }
        
        if (pageNumbers.length) {
        pageNumbers.forEach(el => el.classList.remove('page_active'));
        pageNumbers[0].classList.add('page_active');
        }
    }

    const handleClickPage = (e) => {
        let orgListStartIndex = (+e.target.dataset.value - 1) * elementsPerPage;
        let orgListEndIndex = (+e.target.dataset.value - 1) * elementsPerPage + elementsPerPage;
        setShownOrganizationsList(activeFolder.slice(orgListStartIndex, orgListEndIndex));

        pageNumbers.forEach(el => el.classList.remove('page_active'));
        e.target.classList.add('page_active');
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
                                {folders.map(el => (<OrgButton key={el.id} className="org_btn_element" index={el.id} desc={el.desc}  onDone={handleClickFolder}  />))}
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
                            {arrayOfPages.map(el => <div className="org_pages_element" key={el} data-value={el} onClick={handleClickPage}>{el}</div>)}
                        </div>
                    </div>
                </div>                
            </div>
        </section>
    )
}

export default HomeWhoWeHelp;