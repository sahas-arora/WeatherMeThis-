import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/weather_list';
let port = 8080 ;


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

console.log("Your app is running on port no. " + port);
