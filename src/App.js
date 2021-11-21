import React, { useState, useEffect } from 'react';
import './App.css';
import CurrentWeather from './components/currentWeather';
import WeatherForecast from './components/WeatherForecast';
import { filterForecast } from './utils/functions';
import SelectCity from './components/selectCity';

const myId = process.env.REACT_APP_MY_API_ID;

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Prague');
  const [forecast, setForecast] = useState(null);

  const fetchWeather = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${myId}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  };

  const fetchForecast = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${myId}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setForecast(filterForecast(data.list));
      });
  };

  const handleChangeCity = (c) => {
    setCity(c);
  };

  useEffect(() => {
    fetchWeather(city);
    fetchForecast(city);
  }, [city]);

  console.log(weather);
  console.log(forecast);

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <SelectCity actualCity={city} onChange={handleChangeCity} />
        <div className="weather">
          <CurrentWeather weather={weather} />
          <WeatherForecast forecast={forecast} />
        </div>
      </div>
    </div>
  );
};

export default App;
