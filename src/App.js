import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import { cities } from './utils/cities';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForcast] = useState(null);
  const [city, setCity] = useState('Prague');
  const api_id = process.env.REACT_APP_MY_API_ID;

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_id}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log({ weather });
      });
  };

  const fetchForecast = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${api_id}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setForcast(data.list.filter((element, index) => index % 8 === 0));
        console.log({ forecast });
      });
  };

  useEffect(() => {
    fetchWeather();
    fetchForecast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <div className="App">
      <div className="container">
        <h1> My Weather App </h1>
        {/*  <div className="weather"> */}
        {/* <div className="button-group">
            <button
              className="button"
              onClick={() => {
                setCity('Prague');
              }}
            >s
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
          </div> */}
        <div className="select-wrapper">
          <select
            className="select"
            name="cityselect"
            id="cityselect"
            value={city}
            onChange={(event) => {
              setCity(event.target.value);
            }}
          >
            {cities.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </select>
        </div>
        <div className="weather">
          {weather !== null || undefined ? <Weather weather={weather} /> : null}
          <div className="weather__forecast" id="predpoved">
            {forecast
              ? forecast.map((element, index) => (
                  <Forecast key={index} forecast={element} />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
