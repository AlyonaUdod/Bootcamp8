import React from 'react';
import './SmallCard.css'
import PropTypes from 'prop-types'

const SmallCard = ({id, name, surname, tel, email, deleteCard, edit}) => {
    return (
        <div className="card">
            <span className="del" id={id} onClick={deleteCard}>X</span>
            <h3 className="title">{name}{surname}</h3>
            <p className="tel">{tel}</p>
            <p className="mail">{email}</p>
            <span className="del" id={id} onClickCapture={edit}>Edit</span>
        </div>
    );
};

SmallCard.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default SmallCard;