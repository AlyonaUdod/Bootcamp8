import React from 'react';
import styles from './Button.css'

const Button = ({text, func}) => {
    return (
        <div>
            <button className={styles.button} onClick={func}>{text}</button>
        </div>
    );
};

export default Button;

