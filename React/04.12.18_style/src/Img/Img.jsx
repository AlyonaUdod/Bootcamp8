import React from 'react';
import PropTypes from 'prop-types'
import style from './Img.css'

const Img = ({src, pr}) => {
    return (
      <div className={style.cont}>
         <img src={src} alt='' className={style.img}/> 
        {pr}
      </div>  
    );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  pr: PropTypes.string
}

Img.defaultProps = {
  pr: null
}


export default Img;