import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (
        <ul className="list">
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
        </ul>
    );
};

export default Menu;