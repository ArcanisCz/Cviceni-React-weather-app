import React, { useState, useEffect } from 'react';
import './App.css';
import CurrentWeather from './currentWeather';
import WeatherForecast from './WeatherForecast';

const myId = process.env.REACT_APP_MY_API_ID;

const App = () => {
  const [weather, setWeather] = useState(null); //string?!
  const [forecast, setForecast] = useState(null);

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Prague&units=metric&APPID=${myId}`,
    )
      .then((response) => response.json())
      .then((json) => {
        setWeather(json);
      });
  };

  const fetchForecast = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Prague&units=metric&APPID=${myId}`,
    )
      .then((response) => response.json())
      .then((json) => {
        setForecast(json);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  useEffect(() => {
    fetchForecast();
  }, []);

  console.log(weather);
  console.log(forecast);

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="weather">
          {/* <div className="button-group">
            <button className="button">City01</button>
            <button className="button">City02</button>
            <button className="button">City03</button>
          </div> */}

          <CurrentWeather weather={weather} />
          <WeatherForecast />
        </div>
      </div>
    </div>
  );
};

export default App;
