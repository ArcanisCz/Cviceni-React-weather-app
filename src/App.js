import React, { useState, useEffect } from "react";
import "./App.css";

import Weather from './components/Weather';

import{cities}  from './utils/cities.js';
const App = () => {

  /* API  */
  const myApiKey = process.env.REACT_APP_MY_API_ID;
  const currentWeatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=Prague&units=metric&APPID=700f35f28ea0460f6c47b9af0047a747';

  
  /*useState for weather and for city */
  const [weather, setWeather] =  useState(null);
  const [city, setCity] =  useState("Prague");


  /* fetch function to use api and return response with current weather */
  const fetchWeather = () => {
    fetch(currentWeatherAPI + myApiKey + '&q=' + city)
      .then(response => response.json())
      .then(json => setWeather(json))
  };


  useEffect(() => {
    fetchWeather();
  }, [city]);

  useEffect(fetchWeather, [city]);


  /* handler for button */
  const handleOnButtonClick = (event) => {
    setCity(event.target.outerText);
  }
  

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
           {<div className="button-group">
            <button className="button" onClick={handleOnButtonClick} >Prague</button>
            <button className="button" onClick={handleOnButtonClick} >Berlin</button>
            <button className="button" onClick={handleOnButtonClick} >Amsterdam</button>
          </div> }
       
          <div className="select-wrapper">
          <select
            className="select"
            name="cityselect"
            id="cityselect"
            value={city}
            onChange={({target}) => setCity(target.value)}
          >
            {cities.map(city => <option value={city} key={city}>{city}</option>)}
          </select>
        </div>

         <div className="weather">
            <Weather weather = {weather}/>
          
        </div>
      </div>
    </div>
  );
};

export default App;
