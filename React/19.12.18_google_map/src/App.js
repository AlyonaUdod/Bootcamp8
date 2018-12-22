import React, { Component } from 'react'
import MyMapComponent from './Map/Map'
import Geocode from "react-geocode";
import './App.css'
import axios from 'axios'

export default class App extends Component {
  state = {
    coord: []
  }

  addMarker = (a, b, address) => {
    // console.log(e.latLng.lat())
    // console.log(e.latLng.lng())
    // let a = e.latLng.lat()
    // let b = e.latLng.lng()
    // await this.getInfo(a,b)
    let obj = {
      lat: a,
      lng: b,
      address: address,
      marker: true,
    }
    console.log(obj)
    this.setState(prev=>({
      coord: [...prev.coord, obj],
    }))
  }

  showTitle = (e) => {
    this.setState({
       coord: this.state.coord.map(el => el.lat === e.latLng.lat() && el.lng === e.latLng.lng() ? {...el, marker: !el.marker} : el)
    })
  }

  getInfo = (e) => {
    let a = e.latLng.lat()
    let b = e.latLng.lng()
    Geocode.setApiKey("AIzaSyDEMcUM0qLC6x1-i8iPxRQW1e6dEzIIOrw");
    Geocode.fromLatLng(a, b)
    .then(res => { 
        console.log(res)
         const address = res.results[0].formatted_address;
         this.addMarker(a, b, address)
      },
      error => {
        console.error(error);
      }
    );
  }

  render() {
    return (
      <div className="wrapper">
        <MyMapComponent addMarker={this.addMarker} getInfo={this.getInfo} marker={this.state.marker} coord={this.state.coord} showTitle={this.showTitle}/>
      </div>
    )
  }
}



// AIzaSyDEMcUM0qLC6x1-i8iPxRQW1e6dEzIIOrw api google.map
