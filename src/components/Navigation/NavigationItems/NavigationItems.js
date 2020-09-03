import React from 'react';
import './NavigationItems.css';
import {PAGES} from "../../../Pages";
import {NavLink} from "react-router-dom";

const NavigationItems = () => (
    <ul className="NavigationItems">
            {PAGES.map(page => (
                <li
                    key={page.id}
                    className='NavigationItem'
                >
                        <NavLink
                            exact to={page.id === 'home' ? '/' : `/pages/${page.id}`}
                        >
                                {page.name}
                        </NavLink>
                </li>
            ))}
            <li
                className='NavigationItem'
            >
            <NavLink
                exact to={`/pages/admin`}
            >
                    Admin
            </NavLink>
            </li>
    </ul>
);

export default NavigationItems;