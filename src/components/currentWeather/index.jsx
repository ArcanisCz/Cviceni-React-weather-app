import React from 'react';
import './style.css';

import { getTimeStamp } from '../../utils/functions';
import { getBackground } from '../../utils/functions';

const CurrentWeather = ({ weather }) => {
  return (
    <div className={getBackground({ weather })}>
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
            <span id="sunrise">
              {getTimeStamp(weather?.sys.sunrise + weather?.timezone - 3600)}
            </span>
          </div>
        </div>
        <div className="weather__section">
          <h3 className="weather__title">Sunset</h3>
          <div className="weather__value">
            <span id="sunset">
              {getTimeStamp(weather?.sys.sunset + weather?.timezone - 3600)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
