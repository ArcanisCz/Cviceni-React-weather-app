import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Weather from './components/Weather';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Prague');
  const api_id = process.env.REACT_APP_MY_API_ID;

  const fetchWeather = (city) => {
    /* fetch(
                          'https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=' +
                            api_id,
                        ) */
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_id}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log({ weather });
      });
  };
  console.log(process.env);

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  // const handleClick = () => {};

  /*   { weather.name }
     {Math.round(weather.main.temp)}
    { weather.weather[0].description }
    { weather.wind.speed }
    { weather.main.humidity }
    <img src = { `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` }
        alt = "current weather icon" />
    { weather.sys.sunrise } 
    { weather.sys.sunset } 
 */
  return (
    <div className="App">
      <div className="container">
        <h1> My Weather App </h1>
        <div className="weather">
          <div className="button-group">
            <button
              className="button"
              onClick={() => {
                setCity('Prague');
              }}
            >
              Prague
            </button>
            <button
              className="button"
              onClick={() => {
                setCity('London,uk');
              }}
            >
              London
            </button>
            <button
              className="button"
              onClick={() => {
                setCity('Reykjavik');
              }}
            >
              Reykjavik
            </button>
          </div>{' '}
          {/* {weather !== null || undefined ? 'weather__current' : null} */}{' '}
          {weather !== null || undefined ? <Weather weather={weather} /> : null}
          <div className="weather__forecast" id="predpoved">
            <div className="forecast">
              <div className="forecast__day"> Day, date </div>
              <div className="forecast__icon">
                {' '}
                {/* <img
                                         src={URL FROM OPEN WEATHER}
                                         style={{ height: "100%" }}
                                         alt="current weather icon"
                                      /> */}
              </div>
              <div className="forecast__temp"> --°C </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
