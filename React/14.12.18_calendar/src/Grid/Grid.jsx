import React from 'react';
import Day from '../Day/Day';

const Grid = (props) => {
    console.log(props);
    return (
        <div className='row'>
            {props.days.map((el,i)=> <Day day={el} key={el + i}/>)}
        </div>
    );
};

export default Grid;