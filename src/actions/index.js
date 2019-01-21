
import axios from 'axios';

const API_KEY = '08d7c511061a78d58c57644adb4f3c15';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;

export const FETCH_WEATHER = 'FETCH_WEATHER';
//Middlewares are functions that take an action, and
//depending on the action's type property or payload
//property, the middleware can choose to let the action
//pass through or multiple other possibilities.

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q= ${city},us`;
  let request = axios.get(url);  //axios returns a promise. Promise is a data structure. It doesn't contain any of our data. We're returning the promise here as the payload.

  console.log("Request: ", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
