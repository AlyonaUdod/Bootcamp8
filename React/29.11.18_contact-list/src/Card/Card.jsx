import React from 'react';
import PropTypes from 'prop-types'
import './Card.css'

const Card = ({name, surname, tel, mail, birth}) => {
    return (
        <div>
            <h3 className="name">{name}</h3>
            <h3 className="surname">{surname}</h3>
            <p className="tel">{tel}</p>
            <p className="mail">{mail}</p>
            <p className="birth">{birth}</p>
        </div>
    );   
};

Card.PropTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    birth: PropTypes.string.isRequired,
}


// Card.defaultProps = {
//     name: 'Jon',
//     surname: 'Snow',
//     tel: ,
//     mail: 'fjfjfj@getMaxListeners.com',
//     birth: '16th January 1456'
//   }

export default Card;