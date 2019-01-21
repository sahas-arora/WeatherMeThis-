

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';
import GoogleMap from '../components/google_maps';

class WeatherList extends Component {

  renderWeather(cityData) {

    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * (9/5) - 459.67);
    const press = cityData.list.map(weather => weather.main.pressure);
    const humid = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    console.log(temps);


    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
      <td>
        <Chart data={temps} color="orange" units="F" />
      </td>
      <td>
        <Chart data={press} color="purple" units="hPA"/>
      </td>
      <td>
        <Chart data={humid} color="red" units="% " />
      </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
          <th>Temperature (Fahrenheit(F))</th>
        <th>Pressure (HpA)</th>
      <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}


let mapStateToProp = function(state){
  return {
    weather: state.weather
  }
}
export default connect(mapStateToProp)(WeatherList);
