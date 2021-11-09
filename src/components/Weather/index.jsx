import React from 'react';
import { useState } from 'react';

const convertTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = '0' + date.getMinutes();
  const seconds = '0' + date.getSeconds();
  const formattedTime =
    hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  console.log(formattedTime);
  return formattedTime;
};

const Weather = ({ weather }) => {
  return (
    <div className="weather__current">
      <h2 className="weather__city" id="mesto">
        {/*  City, Country */}
        {weather.name}
      </h2>
      <div className="weather__inner weather__inner--center">
        <div className="weather__section weather__section--temp">
          <span className="weather__temp-value" id="teplota">
            {/*  -- */}
            {Math.round(weather.main.temp)}
          </span>
          <span className="weather__temp-unit"> °C </span>
          <div className="weather__description" id="popis">
            {/*  -- */}
            {weather.weather[0].description}
          </div>
        </div>
        <div className="weather__section weather__section--icon" id="ikona">
          {/*  -- */}
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="current weather icon"
          />
          {/* <img
                    src={URL FROM OPEN WEATHER}
                    alt="current weather icon"
                  /> */}
        </div>
      </div>
      <div className="weather__inner">
        <div className="weather__section">
          <h3 className="weather__title"> Wind </h3>
          <div className="weather__value">
            <span id="wind">
              {/* -- */}
              {weather.wind.speed}
            </span>
            km / h
          </div>
        </div>
        <div className="weather__section">
          <h3 className="weather__title"> Humidity </h3>
          <div className="weather__value">
            <span id="humidity">
              {/* -- */}
              {weather.main.humidity}
            </span>
            %
          </div>
        </div>
      </div>
      <div className="weather__inner">
        <div className="weather__section">
          <h3 className="weather__title"> Sunrise </h3>
          <div className="weather__value">
            <span id="sunrise">
              {/* -- */}
              {/*  {weather.sys.sunrise} */}
              {convertTimestamp(weather.sys.sunrise)}
            </span>
          </div>
        </div>
        <div className="weather__section">
          <h3 className="weather__title"> Sunset </h3>
          <div className="weather__value">
            <span id="sunset">
              {/* -- */}
              {/* {weather.sys.sunset} */}
              {convertTimestamp(weather.sys.sunset)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
