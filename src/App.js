import React, { useState, useEffect } from "react";
import "./App.css";

import Weather from './components/Weather';
import Loading from './components/Loading';
import Forecast from './components/Forecast';

import{cities}  from './utils/cities';
import{forecastDashboard}  from './utils/index';



const App = () => {

  /* API  */
  const MY_API_KEY = process.env.REACT_APP_MY_API_ID;
  const CURRENT_WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather?units=metric&APPID=';
  const FORECAST_WEATHER_API = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=';

  
  /*useState for weather and for city */
  const [weather, setWeather] =  useState(null);
  const [forecast, setForecast] = useState(null);
  const [city, setCity] =  useState("Bratislava");


  /* fetch function to use api and return response with current weather */
  const fetchWeather = () => {
    fetch( CURRENT_WEATHER_API + MY_API_KEY + '&q=' + city)
      .then(response => response.json())
      .then(json => setWeather(json))
  };

  /* fetch function to use api and return response with 5 days forecast weather */
  const fetchForecast = () => {
    fetch( FORECAST_WEATHER_API + MY_API_KEY + '&q=' + city)
      .then(response => response.json())
      .then(json => setForecast(forecastDashboard(json.list)))
  };


  useEffect(() => {
    fetchWeather();
  }, [city]);

  useEffect(() => {
    fetchForecast();
  }, [city]);


  useEffect(fetchWeather, [city]);
  useEffect(fetchForecast, [weather]);




  /* handler  */
  const handleOnClickButton = (event) => {
    setCity(event.target.outerText);
  }

  const handleOnChangeCity = (event) => {
    setCity(event.target.value);
  }

  

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
           {<div className="button-group">
            <button className="button" onClick={handleOnClickButton} >Bratislava</button>
            <button className="button" onClick={handleOnClickButton} >Prague</button>
            <button className="button" onClick={handleOnClickButton} >Berlin</button>
          </div> }
       
          <div className="select-wrapper">
          <select
            className="select"
            name="cityselect"
            id="cityselect"
            value={city}
            onChange={handleOnChangeCity} 
          >
            {cities.map(city => <option value={city} key={city}>{city}</option>)}
          </select>
        </div>

         <div className="weather">
         {weather ? <Weather weather={weather} /> : <Loading />}
            <div className="weather__forecast" id="predpoved">
            {forecast ? forecast.map (item => <Forecast data={item} key={item.dt_txt}/>) : <Loading />} 
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;
