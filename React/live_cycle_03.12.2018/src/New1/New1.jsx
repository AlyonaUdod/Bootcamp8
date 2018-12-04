import React from 'react';
import PropTypes from 'prop-types'
import './New1.css'


const New1 = ({news, body, complete, id, showFullInfo}) => {
    return (
        <li className='item'> 

            <div className={!complete ? 'cont':'cont item_open'}><p>{news}</p>
                <span id={id} onClick={showFullInfo}>{!complete ? '>' : '^'} </span>
            </div>
        
            <div className={!complete ? 'wrap':'wrap open'}>
                <p className="text">{body}</p>
                <a href="google.com" className="link">Read More</a>
            </div>

        </li>
    );
};

export default New1;

New1.propTypes = {
    news: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    showFullInfo: PropTypes.func.isRequired,
  }
