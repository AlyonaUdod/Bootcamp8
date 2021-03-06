import React from 'react';
import Footer from '../Footer/Footer.jsx'
import PropTypes from 'prop-types'
import style from './Today.css'

const Today = ({temp, snow, pressure, humidity, sunrise, sunset, wind, icon, quote, author}) => {
// console.log(icon)
    return (  
        <Footer>
            <div className={style.container}>
                <div className={style.weatherToday}> 
                    <p className={style.cloud}>{snow}</p>
                    <p className={style.TempP}>Temperature:  <span className={style.Temp}>{Math.ceil(temp).toFixed(0)}</span>&deg;C.</p>
                    <img className={style.Icon} src={icon} alt={snow}/>
                    <div className={style.weatherTextInfo}>
                         <p>Pressure: {pressure} hPa.</p>
                        <p>Humidity: {humidity}%.</p>
                        <p>Sunrise: {sunrise} loc.time.</p>
                        <p>Sunset: {sunset} loc.time.</p>
                        <p>Wind: {wind} m/s.</p>
                    </div>
                   
                </div>
                <div className={style.quote}>
                    <h3>{author}</h3>
                    <p> "{quote}"</p>
                </div>
            </div>
        </Footer>
    );
};

export default Today;

Today.propTypes = {
    temp: PropTypes.number.isRequired, 
    snow: PropTypes.string.isRequired, 
    pressure: PropTypes.number.isRequired, 
    humidity: PropTypes.number.isRequired, 
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired, 
    wind: PropTypes.number.isRequired, 
    icon: PropTypes.string.isRequired, 
    quote: PropTypes.string.isRequired, 
    author: PropTypes.string.isRequired,
}