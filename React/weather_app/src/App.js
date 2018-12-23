import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import tz from 'moment-timezone'

import Header from './Header/Header.jsx'
import Wrapper from './Wrapper/Wrapper.jsx'
import Menu from './Menu/Menu.jsx'
import Loader from 'react-loader-spinner'
import Today from './Today/Today.jsx';
import MoreDays from './MoreDays/MoreDays.jsx';

import Icons from './Weather_Icon/Icon.jsx'
import BG from './Bg/BG.'
import rainbow from './Bg/img_bg/rainbow_1280.jpg'

import style from './App.css'

export default class App extends Component {

  state = { 
    info: {}, // данные с сервера о погоде
    infoMoreDays: [],
    geo: {
      time: moment().tz('Europe/Kiev').format('HH:mm:ss'),
      day: moment().tz('Europe/Kiev').format('MMMM Do YYYY'),
      weekDay: moment().tz('Europe/Kiev').format('dddd'),
      town: 'Kijv',
      country: 'UA',
      sunrise: '',
      sunset: '',
      icon: '',
    }, // координаты и время 
    favorList: JSON.parse(localStorage.getItem('FavorList')) || [], // города избранные
    isLoading: true, 
    validateInput: /[a-zA-Z]/, 
    valid: true,
    fetchError: false, 
    listVisible: false,
    input: '',
    lat: 0,
    lng: 0,
    timeZone: 'Europe/Kiev',
    href: localStorage.getItem('ActiveWindow') ? JSON.parse(localStorage.getItem('ActiveWindow')) : 'https://alyonaudod.github.io/Weather_App/',
  }

  inputChange = (e) => {
    let value = e.target.value;
    let isValid = this.state.validateInput.test(value)
    this.setState({
      input: value,
      valid: isValid,
    })
  }

  componentDidMount () { 
    this.getInfoFromServer()
    // this.getTime()
    setInterval(this.timeChange, 1000)
  }

  timeChange = () => {
    this.setState(prev =>({
      geo: {...prev.geo, time: moment().tz(this.state.timeZone).format('HH:mm:ss'),}
    }))
  }

  getInfoFromServer = (e) => {
      if (e !== undefined) {
          e.preventDefault() 
      }
      const weatherFetch = axios.get(`https://api.openweathermap.org/data/2.5/weather?APPID=7ed6ba32164c3f1c39aaeeecdc77928f&q=${`${this.state.input}`|| 'Kiev'}&units=metric`)
    Promise.all([weatherFetch])
       .then(data => this.getTime(data))
       .catch(() => this.setState({
         fetchError: true
    }))
  }

  getTime = (data) => {
    let lat = data[0].data.coord.lat
    let lng = data[0].data.coord.lon
    const timeFetch = axios.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=1458000000&key=AIzaSyDEMcUM0qLC6x1-i8iPxRQW1e6dEzIIOrw`)
    timeFetch
    .then(info => this.pushInfoToState(data, info))
    .catch(err => console.log(err))
  }

  pushInfoToState = (data, info) => {
    console.log(data)
    console.log(info)

    let lat = data[0].data.coord.lat
    let lng = data[0].data.coord.lon
    let timeZone = info.data.timeZoneId

    let sR = moment.tz(`"${data[0].data.sys.sunrise.toString()}"`, "X", timeZone).format("HH:mm")
    let sS =  moment.tz(`"${data[0].data.sys.sunset.toString()}"`, "X", timeZone).format("HH:mm")
    
    let iC = Icons.filter(el => el.name === data[0].data.weather[0].main)
    let bG = BG.filter(el => el.name === data[0].data.weather[0].main)

    this.setState(prev =>({
      info: data[0].data,
      backGround: bG.length !== 0 ? bG[0].src : BG[BG.length-1].src,
      geo: {...prev.geo, 
        time: moment().tz(timeZone).format('HH:mm:ss'),
        day: moment().tz(timeZone).format('MMMM Do YYYY'),
        weekDay: moment().tz(timeZone).format('dddd'),
        town: data[0].data.name, 
        country: data[0].data.sys.country, 
        sunrise: sR, 
        sunset: sS, 
        icon: iC.length !== 0 ? iC[0].src : Icons[Icons.length-1].src},
      input: '',
      isLoading: false, 
      fetchError: false,
      lat: lat,
      lng: lng,
      timeZone: timeZone
    }))
  }

  pushTownToFavourite = () => {
    let result = JSON.parse(localStorage.getItem('FavorList')) || [];
      if (!this.state.favorList.includes(this.state.geo.town)) {
        result.push(this.state.geo.town)
        this.setState(prev =>({
          favorList: [...prev.favorList, this.state.geo.town],
        }))
    }
    localStorage.setItem('FavorList', JSON.stringify(result))
  }

  showFavorList = () => {
    this.setState(prev=> ({
      listVisible: !prev.listVisible,
    }))
  }

  showWeaterOnFavourite = async(e) => {
    e.persist()
    let city = e.target.dataset.name
    if (this.state.geo.town !== city) {
       await this.setState(prev=>({
        input: city,
        listVisible: !prev.listVisible,
      }))
       this.getInfoFromServer(e) 
    }
  }

  removeCity = async(e) => {
    e.preventDefault()
    e.stopPropagation()
    let id = e.target.dataset.id 
    await  this.setState({
        favorList: this.state.favorList.filter(el => el !== id),
      })
    localStorage.setItem('FavorList', JSON.stringify(this.state.favorList))
    setTimeout(this.showFavorList, 500)
    }

  changeColorOnItem = (e) => {
    e.persist()
      if (e.target.href !== this.state.href) {
        let res = e.target.href
        localStorage.setItem('ActiveWindow', JSON.stringify(res)) 
      this.setState({
        href: e.target.href
      })
    } 
  }

  render() {

    const {geo, favorList, input, listVisible, info, fetchError, valid, backGround, href, lat, lng} = this.state   

    return (

  <Wrapper>
{this.state.isLoading ? 
  <div className={style.wrap} style={ { backgroundImage: `linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.8)),url(${rainbow})`} }>
    <div className={style.wrapLoader}> 
      <Loader type="Circles" color="#bbbbbb" height={80} width={80} margin="100px"/> 
    </div>
  </div> :
      
      <div className={style.cont} style={ { backgroundImage: `linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)),url(${backGround})` } }> 

        <Header time={geo.time} day={geo.day} weekDay={geo.weekDay} town={geo.town} country={geo.country} getInfo={this.getInfoFromServer} inputChange={this.inputChange} input={input} pushTownToFavourite={this.pushTownToFavourite} timeChange={this.timeChange} favorList={favorList} showFavorList={this.showFavorList} listVisible={listVisible} showWeaterOnFavourite={this.showWeaterOnFavourite} removeCity={this.removeCity} fetchError={fetchError} valid={valid}/> 
        <Menu colorToggle={this.changeColorOnItem} href={href}/>
        <Switch>
          <Route exact path='/' render={() =>  <Today temp={info.main.temp} snow={info.weather[0].description} pressure={info.main.pressure} humidity={info.main.humidity} sunrise={geo.sunrise} sunset={geo.sunset} wind={info.wind.speed} icon={geo.icon} lat={lat} lng={lng} town={geo.town} country={geo.country}  />}/>
          <Route path='/moredays' render={() => <MoreDays town={geo.town}/>}/>
        </Switch>

     </div>
  }
  
  </Wrapper>
    )
  }
}