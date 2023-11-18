import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Col, Collapse, Row } from 'reactstrap';
import withRouter from '../../Components/Common/withRouter';

// Import Data
import navdata from "../LayoutMenuData";
//i18n
import { withTranslation } from "react-i18next";

const HorizontalLayout = (props : any) => {
    const [isMoreMenu, setIsMoreMenu] = useState<boolean>(false);
    const navData = navdata().props.children;
    let menuItems = [];
    let splitMenuItems : Array<any> = [];
    let menuSplitContainer = 6;
    navData.forEach(function (value : any, key : number) {
        if (value['isHeader']) {
            menuSplitContainer++;
        }
        if (key >= menuSplitContainer) {
            let val = value;
            val.childItems = value.subItems;
            val.isChildItem = (value.subItems) ? true : false;
            delete val.subItems;
            splitMenuItems.push(val);
        } else {
            menuItems.push(value);
        }
    });
    menuItems.push({ id: 'more', label: 'More', icon: 'ri-briefcase-2-line', link: "/#", stateVariables: isMoreMenu, subItems: splitMenuItems, click: function (e : any) { e.preventDefault(); setIsMoreMenu(!isMoreMenu); }, });

    const path = props.router.location.pathname;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const initMenu = () => {
            const pathName = process.env.PUBLIC_URL + path;
            const ul = document.getElementById("navbar-nav") as HTMLElement;
            const items : any = ul.getElementsByTagName("a");
            let itemsArray = [...items]; // converts NodeList to Array
            removeActivation(itemsArray);
            let matchingMenuItem = itemsArray.find((x) => {
                return x.pathname === pathName;
            });
            if (matchingMenuItem) {
                activateParentDropdown(matchingMenuItem);
            }
        };
        initMenu();
    }, [path, props.layoutType]);

    function activateParentDropdown(item : any) {
        item.classList.add("active");
        let parentCollapseDiv = item.closest(".collapse.menu-dropdown");

        if (parentCollapseDiv) {

            // to set aria expand true remaining
            parentCollapseDiv.classList.add("show");
            parentCollapseDiv.parentElement.children[0].classList.add("active");
            parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
            if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                var parentElementDiv = parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling;
                if (parentElementDiv)
                    if (parentElementDiv.closest(".collapse"))
                        parentElementDiv.closest(".collapse").classList.add("show");
                parentElementDiv.classList.add("active");
                var parentElementSibling = parentElementDiv.parentElement.parentElement.parentElement.previousElementSibling;
                if (parentElementSibling) {
                    parentElementSibling.classList.add("active");
                }
            }
            return false;
        }
        return false;
    }

    const removeActivation = (items : any) => {
        let actiItems = items.filter((x : any) => x.classList.contains("active"));

        actiItems.forEach((item : any) => {
            if (item.classList.contains("menu-link")) {
                if (!item.classList.contains("active")) {
                    item.setAttribute("aria-expanded", false);
                }
                if (item.nextElementSibling) {
                    item.nextElementSibling.classList.remove("show");
                }
            }
            if (item.classList.contains("nav-link")) {
                if (item.nextElementSibling) {
                    item.nextElementSibling.classList.remove("show");
                }
                item.setAttribute("aria-expanded", false);
            }
            item.classList.remove("active");
        });
    };

    return (
        <React.Fragment>
                    <React.Fragment>
 
                                <li className="nav-item">
                                    <Link
                                        className="nav-link menu-link"
                                        to="/dashboard"
                                    >
                                        <i className='ri-dashboard-2-line'></i> <span data-key="t-apps">Analytics</span>
                                    </Link>
                        
                                </li>

                                
                                <li className="nav-item">
                                    <Link
                                        className="nav-link menu-link"
                                        to="/allquotes"
                                    >
                                        <i className='ri-dashboard-2-line'></i> <span data-key="t-apps">Quotes</span>
                                    </Link>
                        
                                </li>

                                
                                <li className="nav-item">
                                    <Link
                                        className="nav-link menu-link"
                                        to="/allLessees"
                                    >
                                        <i className='ri-dashboard-2-line'></i> <span data-key="t-apps">Lessee's</span>
                                    </Link>
                        
                                </li>

                                
                                <li className="nav-item">
                                    <Link
                                        className="nav-link menu-link"
                                        to="/allusers"
                                    >
                                        <i className='ri-dashboard-2-line'></i> <span data-key="t-apps">Users</span>
                                    </Link>
                        
                                </li>

                                
                                <li className="nav-item">
                                    <Link
                                        className="nav-link menu-link"
                                        to="/allpartneradmins"
                                    >
                                        <i className='ri-dashboard-2-line'></i> <span data-key="t-apps">Partner Admins</span>
                                    </Link>
                        
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link menu-link"
                                        to="/allpartnerusers"
                                    >
                                        <i className='ri-dashboard-2-line'></i> <span data-key="t-apps">Partner Users</span>
                                    </Link>
                        
                                </li>

                                <li className="nav-item">
                                    <Link
                                        className="nav-link menu-link"
                                        to="/allcustomer"
                                    >
                                        <i className='ri-dashboard-2-line'></i> <span data-key="t-apps">Customers</span>
                                    </Link>
                        
                                </li>
                            
                    </React.Fragment>
            {/* menu Items */}
        </React.Fragment >
    );
};

HorizontalLayout.propTypes = {
    location: PropTypes.object,
    t: PropTypes.any,
};

export default withRouter(withTranslation()(HorizontalLayout));