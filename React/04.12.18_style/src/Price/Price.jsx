import React from 'react';
import PropTypes from 'prop-types'
import style from './Price.css'

const Price = ({price, status}) => {
    return (
       <p className={status? style.abs : null }>Price: {price} $.</p>
    );
};

Price.propTypes = {
    price: PropTypes.number.isRequired,
    status: PropTypes.bool.isRequired,
}

export default Price;