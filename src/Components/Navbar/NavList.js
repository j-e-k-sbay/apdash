import React, { useEffect, useState } from 'react';
import '../../Styles/Navbar/NavList.css';
import NavListOption from './NavListOption';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function NavList() {
    const list = [
        {label: "Home", icon: faCaretDown},
        {label: "About",icon:""},
        {label: "Features", icon:""},
        {label: "Pages", icon: faCaretDown},
        {label: "Screenshots", icon:""},
        {label: "Process", icon:""},
        {label: "Pricing", icon:""},
        {label: "Contact", icon:""},
    ]

    return (
        <div className="nav-list-container">
            {list.map((item,index) =>(
                <NavListOption
                    label = {item.label}
                    icon = {item.icon}
                />
            ))}
        </div>
    );
}

export default NavList;
