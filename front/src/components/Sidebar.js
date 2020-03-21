import React from 'react';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <aside>
            <nav>
                <ul>
                    <NavLink to='/'>All</NavLink>
                    <NavLink to='/cars'>Cars</NavLink>
                    <NavLink to='/furniture'>Furniture</NavLink>
                    <NavLink to='/real-estate'>Real Estate</NavLink>
                    <NavLink to='/others'>Others</NavLink>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
