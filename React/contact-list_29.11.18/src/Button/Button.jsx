import React from 'react';
import './Button.css'

const Button = ({text, func, value}) => {
  return (
    <button className="button" type="submit" value={value} onClick={func}>{text}</button>
  );
};

export default Button;