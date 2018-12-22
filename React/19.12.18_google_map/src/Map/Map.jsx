import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, BicyclingLayer, } from "react-google-maps"
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";
import './Map.css'
const google = window.google = window.google ? window.google : {}




const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap onClick={props.getInfo}
    defaultZoom={8}
    defaultCenter={{ lat: 50.450418, lng: 30.523541 }}
  >

  {props.coord.map(el => <MarkerWithLabel
      key={el.lat+el.lng}
      position={{ lat: el.lat, lng: el.lng }}
      labelAnchor={new google.maps.Point(0, 0)}
      labelStyle={{backgroundColor: "none", fontSize: "1rem", color:"white", padding: "1px",}}
      labelVisible={el.marker}
      onClick={props.showTitle}
    >
      <div>{el.address}</div>
  </MarkerWithLabel>)}

        <BicyclingLayer autoUpdate />
  </GoogleMap>
)

export default MyMapComponent