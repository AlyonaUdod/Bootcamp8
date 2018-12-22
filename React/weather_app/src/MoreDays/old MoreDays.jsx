import React from 'react';
import Footer from '../Footer/Footer.jsx'
import Clones from '../Clones/Clones.jsx'
import Chart from '../Chart/Chart.jsx'
import moment from 'moment'
import style from './MoreDays.css'

const MoreDays = ({temp, snow, pressure, humidity, wind, icon, infoOfDays, time, chartData}) => {

    return (
        <Footer>
            <div className={style.wrap}>
                <div className={style.wToday}> 
                    <h3>{moment().format("DD.MM.YYYY")}</h3> 
                    <p className={style.now}>Now: {Math.ceil(temp).toFixed(0)} &deg;C.</p>
                    <p>{snow}</p>
                    <img src={icon} alt="snow"/>
                    <p>Pres: {pressure} hPa.</p>
                    <p>Hum: {humidity}%.</p>
                    <p>Wind: {wind.toFixed(1)} m/s.</p>
                </div> 

                {infoOfDays !== undefined ? infoOfDays.map(el =><Clones key={el.day.dt} tempDay={el.day.main.temp} tempNight={el.night.main.temp} snow={el.day.weather[0].description} pressure={el.day.main.pressure} humidity={el.day.main.humidity} wind={el.day.wind.speed} src={el.day.weather[0].main} time={time} date={el.day.dt}/>) : null}
            </div>

            <div><Chart chartData={chartData}/></div>
        </Footer>
    );
};

export default MoreDays;