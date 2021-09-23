import axios from 'axios';

const API_KEY = '28b2c4d2cd6a447225cf477f77801b0e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather (city) {

    const url = `${ROOT_URL}&q=${city}, india`;
    const response = axios.get( url);

    return {
        type : FETCH_WEATHER,
        payload : response
    };

}