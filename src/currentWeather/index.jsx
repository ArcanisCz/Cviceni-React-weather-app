import React, { useState, useEffect } from 'react';
import './style.css';

const CurrentWeather = () => {
  const [weather, setWeather] = useState(null); //string?!

  const myId = process.env.REACT_APP_MY_API_ID;

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Prague&units=metric&APPID=${myId}`,
    )
      .then((response) => response.json())
      .then((json) => {
        setWeather(json);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  console.log(weather);

  const getSunrise = (unixSunrise) => {
    const hours = new Date(unixSunrise * 1000).getHours();
    const minutes = new Date(unixSunrise * 1000).getMinutes();
    const twoDigitMinutes = minutes.toString().padStart(2, '0');
    return `${hours}:${twoDigitMinutes}`;
  };

  const getSunset = (unixSunset) => {
    const hours = new Date(unixSunset * 1000).getHours();
    const minutes = new Date(unixSunset * 1000).getMinutes();
    const twoDigitMinutes = minutes.toString().padStart(2, '0');
    return `${hours}:${twoDigitMinutes}`;
  };

  const getBackground = (weather) => {
    if (weather?.main.temp < 10) {
      return 'weather__current weather__current--cold';
    } else return 'weather__current';
  };

  return (
    <div className={getBackground(weather)}>
      <h2 className="weather__city" id="mesto">
        {weather?.name}, {weather?.sys.country}
      </h2>
      <div className="weather__inner weather__inner--center">
        <div className="weather__section weather__section--temp">
          <span className="weather__temp-value" id="teplota"></span>
          <span className="weather__temp-unit">
            {Math.round(weather?.main.temp)}
          </span>
          °C
          <div className="weather__description" id="popis">
            {weather?.weather[0].main}
          </div>
        </div>
        <div className="weather__section weather__section--icon" id="ikona">
          {
            <img
              src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
              alt="current weather icon"
            />
          }
        </div>
      </div>
      <div className="weather__inner">
        <div className="weather__section">
          <h3 className="weather__title">Wind</h3>
          <div className="weather__value">
            <span id="wind">{Math.round(weather?.wind.speed)}</span> km/h
          </div>
        </div>
        <div className="weather__section">
          <h3 className="weather__title">Humidity</h3>
          <div className="weather__value">
            <span id="humidity">{weather?.main.humidity}</span> %
          </div>
        </div>
      </div>
      <div className="weather__inner">
        <div className="weather__section">
          <h3 className="weather__title">Sunrise</h3>
          <div className="weather__value">
            <span id="sunrise">{getSunrise(weather?.sys.sunrise)}</span>
          </div>
        </div>
        <div className="weather__section">
          <h3 className="weather__title">Sunset</h3>
          <div className="weather__value">
            <span id="sunset">{getSunset(weather?.sys.sunset)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
