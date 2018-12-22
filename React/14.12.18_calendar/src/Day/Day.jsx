import React from 'react';
import './Day.css';

const Day = (props) => {
    return (
            <span className="day-month">{props.day}</span>
    );
};

export default Day;