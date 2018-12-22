import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
import PropTypes from 'prop-types'
import './Map.css'

const google = window.google = window.google ? window.google : {}

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDEMcUM0qLC6x1-i8iPxRQW1e6dEzIIOrw",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `22.5rem` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={4.5}
    center={{lat: props.lat, lng: props.lng }}
  >
<MarkerWithLabel
  position={{ lat: props.lat, lng: props.lng }}
  labelAnchor={new google.maps.Point(0, 0)}
  labelStyle={{fontSize: "1.3rem", fontWeight:'700',  backgroundColor: 'white', color:"black", padding: ".3rem .5rem .2rem", borderRadius: '20px', fontFamily: 'Josefin Sans,sans-serif'}}
 > 
  <div>{props.town}, {props.country}</div>
 </MarkerWithLabel>

  </GoogleMap>
)

export default MyMapComponent


MyMapComponent.propTypes = {
  lat: PropTypes.number.isRequired, 
  lng: PropTypes.number.isRequired, 
  town:  PropTypes.string.isRequired, 
  country: PropTypes.string.isRequired, 
}