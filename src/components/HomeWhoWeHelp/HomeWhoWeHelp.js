import React, { useState, useEffect } from "react";

import OrgButton from "../CommonComp/OrgButton";
import OrgsListItem from "../CommonComp/OrgsListItem";
import funds from "./Funds.js";
import nonGovOrgs from "./NonGovOrgs.js";
import localCollections from "./LocalCollections.js";
import "./HomeWhoWeHelp.scss";

const HomeWhoWeHelp = () => {
    const [orgList, setOrgList] = useState([]);
    const [page, setPage] = useState(1);
    const [activeFolder, setActiveFolder] = useState('funds');
    const [tableOfPages, setTableOfPages] = useState([])
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
    const folderName = document.querySelectorAll('.org_btn');
    const startIndex = elementsPerPage * page - 3;

    (pageNumbers.length !== 0) && pageNumbers[page-1].classList.add('page_active');

    useEffect(() => {
        switch (activeFolder) {
            case 'funds':
                {
                    let pagesTable = pagesControl(funds);
                    setTableOfPages(pagesTable);
                    setOrgList(funds.slice(startIndex, startIndex + 3));
                    break;
                }
            case 'nonGovOrgs': 
                {
                    let pagesTable = pagesControl(nonGovOrgs);
                    setTableOfPages(pagesTable);
                    setOrgList(nonGovOrgs.slice(startIndex, startIndex + 3));
                    break;
                }
            case 'localCollections':
                {
                    let pagesTable = pagesControl(localCollections);
                    setTableOfPages(pagesTable);
                    setOrgList(localCollections.slice(startIndex, startIndex + 3));
                    break;
                }
            default:
                {
                    console.log('Something is not correct...');
                }
        }   
    }, [page, activeFolder])

    const pagesControl = (folder) => {
        let pagesTable = [];
        for (let i = 1; i <= Math.ceil(folder.length/elementsPerPage); i++)
        {
            pagesTable.push(i);
        }
        return pagesTable;
    }

    const handleClickFolder = (e) => {
        folderName.forEach(el => el.classList.remove('org_btn_active'));
        setActiveFolder(e.target.dataset.value);
        setPage(1);
        e.target.classList.add('org_btn_active');
    }

    const handleClickPage = (e) => {
        pageNumbers.forEach(el => el.classList.remove('page_active'));
        setPage(+e.target.dataset.value);
        e.target.classList.add('page_active');
    }
    

    return(
        <section id="org">
            <div className="container">
                <div class="org">
                    <p className="org_title">
                        Who do we help?
                    </p>
                    <div className="org_pagin">
                        <div className="org_menu">
                            <ul className="org_menu_list">
                                {folders.map(el => (<OrgButton key={el.id} className="org_btn_element" organization={el.organization} desc={el.desc} onDone={handleClickFolder}  />))}
                            </ul>
                        </div>
                      
                        <div className="org_description">
                            <p className="org_description_text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a totam veritatis nesciunt debitis, voluptas qui? Necessitatibus dolore facilis esse!
                            </p>
                        </div>
                        <div className="org_list">
                             {(!orgList) ? (<p>Loading</p>) : (
                                 orgList.map(el => (
                                     <li className="org_list_elem" key={el.id}><OrgsListItem name={el.name} desc={el.description} items={el.items}/></li>
                                     ))
                             )}
                        </div>
                        <div className="org_pages">
                            {tableOfPages.map(el => <div className="org_pages_element" key={el} data-value={el} onClick={handleClickPage}>{el}</div>)}
                        </div>
                    </div>
                </div>                
            </div>
        </section>
    )
}

export default HomeWhoWeHelp;