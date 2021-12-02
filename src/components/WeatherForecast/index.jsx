import React from 'react';
import './style.css';

import { getDayForecast } from '../../utils/functions';

const WeatherForecast = ({ forecast }) => {
  return (
    <div className="weather__forecast" id="predpoved">
      {forecast &&
        forecast.map((pocasi, id) => (
          <div className="forecast" key={id}>
            <div className="forecast__day">
              {getDayForecast(forecast[id]?.dt)}
            </div>
            <div className="forecast__icon">
              {
                <img
                  src={`https://openweathermap.org/img/wn/${forecast[id]?.weather[0].icon}@2x.png`}
                  style={{ height: '100%' }}
                  alt="current weather icon"
                />
              }
            </div>
            <div className="forecast__temp">
              {Math.round(forecast[id]?.main.temp)} °C
            </div>
          </div>
        ))}
    </div>
  );
};
export default WeatherForecast;
