import React from 'react';
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({func, text, name, page}) => {
    return (
        <button onClick={func} name={name} className="refresh" disabled={(page===1 && name ==='prev') || (page===10 && name ==='next') ? 'disabled' : null }>{text}</button>
    );
};

export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
    page: PropTypes.number,
  }

  