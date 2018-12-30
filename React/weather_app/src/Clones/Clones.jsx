import React from 'react';
import Icons from '../Weather_Icon/Icon.jsx'
import PropTypes from 'prop-types'
import style from './Clones.css'
import moment from 'moment'

const Clones = ({tempDay, snow, pressure, humidity, wind, src, date, tempNight}) => {
    
    let iC = Icons.filter(el => el.name === src)
  
    return (
        <div className={style.weather}> 
                <h3>{moment(`"${date.toString()}"`, "X").format('ll')}</h3>
                <h4>{moment(`"${date.toString()}"`, "X").format("dddd")}</h4>
                <p>Day: <span>{Math.round(tempDay).toFixed()}</span> &deg;C.</p>
                <p className={style.tempNight}>Night: <span>{Math.round(tempNight).toFixed()}</span> &deg;C.</p>  
                <img src={iC[0].src} alt={iC[0].name}/>
                <p className={style.cloud}>{snow}</p>
                <div className={style.fullTextInfo}>
                    <p>Pr: {(pressure/1.33).toFixed(0)} mmHg.</p>
                    <p>Hum: {humidity}%.</p>
                    <p>Wind: {wind.toFixed(1)} m/s.</p>
                </div>   
        </div>
    );
};

export default Clones;

Clones.propTypes = {
    tempDay: PropTypes.number.isRequired,
    snow : PropTypes.string.isRequired,
    pressure: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    tempNight: PropTypes.number.isRequired,
}