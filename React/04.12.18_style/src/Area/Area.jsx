import React from 'react';
import PropTypes from 'prop-types'
import style from './Area.css'

const Area = ({area}) => {
    return (
        <p className={style.area}> {area ? `Area: ${area} кв.м` : null}</p> 
    );
};

Area.propTypes = {
    area: PropTypes.number
}

Area.defaultProps = {
    area: null
}

export default Area;