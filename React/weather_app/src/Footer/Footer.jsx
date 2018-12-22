import React from 'react';
import style from './Footer.css';

const Footer = (props) => {
    return (
        <div className={style.Footer}>  
            {props.children}
        </div>
    );
};

export default Footer;

// onClick={props.order} id={props.id}>