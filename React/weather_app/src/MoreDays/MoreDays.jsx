import React, { Component } from 'react'
import Footer from '../Footer/Footer.jsx'
import Clones from '../Clones/Clones.jsx'
import Chart from '../Chart/Chart.jsx'
import Icons from '../Weather_Icon/Icon.jsx'
import Wrapper from '../Wrapper/Wrapper.jsx'
import Loader from 'react-loader-spinner'
// import PropTypes from 'prop-types'
import axios from 'axios'
import moment from 'moment'
import style from './MoreDays.css'
// import rainbow from '../Bg/img_bg/rainbow_1280.jpg'


export default class MoreDays extends Component {

    state = {
        // town: this.props.town,
        infoOfDays: [],
        infoMoreDays: [],
        chartData: {},
        weatherNow: {},
        isLoadingFive: true,
    }   

    componentDidMount () {
        this.getInfo5Days()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.town !== this.props.town) {
            this.getInfo5Days()
        }  
    }

    getInfo5Days = (e) => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?APPID=7ed6ba32164c3f1c39aaeeecdc77928f&q=${`${this.props.town}`}&units=metric`)
        .then(data => this.getMoreDaysInfo(data))
        .catch(() => this.setState({
           fetchError: true
      }))
      }
  
    getMoreDaysInfo = (data) => {
        let full = [];
       
        for ( let i=0; i < 5; i++) {
            let a = +moment().add(i, 'days').startOf('day').format('X');
            let b = +moment().add(i, 'days').endOf('day').format('X');
            let arr = []
            data.data.list.filter(el => el.dt > a && el.dt < b ? arr.push(el) : null);
            full.push(arr)
        } 

        let chartData = {};
  
        chartData.temperature = full.map(el => Math.round(el.reduce((acc, item) => acc + item.main.temp, 0)/el.length))
        chartData.pressure = full.map(el => Math.round(el.reduce((acc, item) => acc + item.main.pressure, 0)/el.length))
        chartData.windSpeed = full.map(el => +(el.reduce((acc, item) => acc + item.wind.speed, 0)/el.length).toFixed(1))
        chartData.humidity = full.map(el => Math.round(el.reduce((acc, item) => acc + item.main.humidity, 0)/el.length)) 
  
        let infoOfDays = []
        full.filter(el => (full.indexOf(el) >=1 && full.indexOf(el) <= 4 ? (infoOfDays.push({day:el[3], night: el[7]})) : null))
        
        let icon = Icons.filter(el => el.name === data.data.list[0].weather[0].main)

        this.setState({
          infoMoreDays: full,
          infoOfDays: infoOfDays,
          chartData: chartData,
          weatherNow: data.data.list[0],
          isLoadingFive: false,
          todayIcon: icon.length !== 0 ? icon[0].src : Icons[Icons.length-1].src,
        })
    }


  render() {

      const {infoOfDays, chartData, weatherNow, todayIcon} = this.state

      return (
    
    <Wrapper>
    {this.state.isLoadingFive ?   
        <Footer>
            <div className={style.contLoader} style={ { backgroundImage: `linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.8))})`} }>
                <div className={style.wrapLoader}> 
                        <Loader type="Circles" color="#bbbbbb" height={80} width={80} margin="100px"/>    
                </div>
            </div>    
        </Footer> : 

        <Footer>
            <div className={style.wrap}>
                <div className={style.wToday}> 
                    <h3>{moment().format("ll")}</h3> 
                    <h4>{moment().format("dddd")}</h4>
                        <p className={style.now}>Now: <span>{Math.ceil(weatherNow.main.temp).toFixed(0)} </span>&deg;C.</p>
                        <img src={todayIcon} alt={weatherNow.weather[0].main}/>
                        <p className={style.cloud}>{weatherNow.weather[0].description}</p>
                    <div className={style.fullTextInfo}>
                        <p>Pr: {(weatherNow.main.pressure/1.33).toFixed(0)} mmHg.</p>
                        <p>Hum: {weatherNow.main.humidity}%.</p>
                        <p>Wind: {(weatherNow.wind.speed).toFixed(1)} m/s.</p>
                    </div>        
                </div> 
                {infoOfDays.map(el =><Clones key={el.day.dt} tempDay={el.day.main.temp} tempNight={el.night.main.temp} snow={el.day.weather[0].description} pressure={el.day.main.pressure} humidity={el.day.main.humidity} wind={el.day.wind.speed} src={el.day.weather[0].main} date={el.day.dt}/>)}
            </div>

            <div className={style.chartJs}><Chart chartData={chartData}/></div>
        </Footer>
    }
     </Wrapper> )
}
}

// MoreDays.propTypes = {
//     [this.props.town] : PropTypes.string
// }