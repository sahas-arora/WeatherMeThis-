

import React, { Component } from 'react';

class GoogleMap extends Component {

  //Whenever a component gets rendered on screen,
  //this function automatically runs. The new keyword
  //creates an embedded google map inside this document.
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }


  render() {
    return (
      <div ref="map" />
    );
  }
}

export default GoogleMap ;
