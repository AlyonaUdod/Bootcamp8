import React from 'react';
import PropTypes from 'prop-types'
import trash from './img/trash.png'
import style from './Favor.css'

const Favor = ({name, func, remove}) => {
    return (
        <li className={style.item} data-name={name} onClick={func}>{name}
            <img src={trash} alt="trash" data-id={name} onClickCapture={remove}/>
        </li>
    );
};

export default Favor;

Favor.propTypes = {
    name: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}

