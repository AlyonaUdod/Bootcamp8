import React from 'react';
import './WeekDays.css';

const WeekDays = ({days}) => {
    return (
        <div className='row day-names'>
        {days.map(el => <span className="day" key={el}>{el}</span>)}
        </div>
    );
};

export default WeekDays;