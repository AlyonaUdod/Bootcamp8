import React from 'react';
import Img from '../Img/Img.jsx'
import Area from '../Area/Area.jsx'
import Price from '../Price/Price.jsx'
import Adress from '../Adress/Adress.jsx'
import style from './Card.css'
import PropTypes from 'prop-types'

const Card = ({templ, adress, area, images, price, tempNum, id}) => {
    const recurs = (el, status) => { return el.component === 'IMAGE' ? <Img key={id+images} src={images} status={status} pr={el.hasOwnProperty('children') ? recurs(el.children[0], el, true) : null}/> : el.component === 'ADDRESS' ? <Adress key={id+adress} adress={adress} status={status}/> : el.component === 'PRICE' ? <Price price ={price} key={id+price} status={status}/> : el.component === 'AREA' ? <Area area={area} key={id+area} status={status}/> : null
    }

    return (    
        <div className={style.card}>

        {templ[tempNum].template.map(el => recurs(el, false))}

        </div>
    );
};

Card.propTypes = {
  templ: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      templates: PropTypes.arrayOf(PropTypes.shape({
        component: PropTypes.string,
        field: PropTypes.string,
      }))
  })),
  adress: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  area: PropTypes.number,
  price: PropTypes.number.isRequired,
  tempNum: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
  }

Card.defaultProps = {
  area: null,
}


export default Card;