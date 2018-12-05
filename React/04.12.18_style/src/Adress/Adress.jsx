import React from 'react';
import PropTypes from 'prop-types';
import style from './Adress.css'

const Adress = ({adress}) => {
    return (
        <p className={style.address}> Adress: "{adress}".</p>
    );
};

Adress.propTypes = {
    adress: PropTypes.string.isRequired
}


export default Adress;