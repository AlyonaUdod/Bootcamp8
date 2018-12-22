import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import style from './Menu.css'

const Menu = ({colorToggle, href}) => {
    return (
        <ul className={style.list}>
            <li className={href !== 'http://localhost:3000/' ? `${style.activeWindow} ${style.items}` : `${style.items}`} onClick={colorToggle}>
                <NavLink to='/'>Today</NavLink>
            </li>
            <li className={ href === 'http://localhost:3000/' ? `${style.activeWindow} ${style.items}` : `${style.items}`} onClick={colorToggle}>
                <NavLink to='/moredays'>More Days</NavLink>
            </li>
        </ul>
    );
};

export default Menu;

Menu.propTypes = {
    href: PropTypes.string.isRequired, 
    colorToggle: PropTypes.func.isRequired,
}