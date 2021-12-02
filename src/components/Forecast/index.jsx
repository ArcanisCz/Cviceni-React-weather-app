import React from 'react';
import { dtConvert } from '../../utils/convert.js';
import './style.css';

const Forecast = ({ forecast }) => {
  return (
    <div className="forecast">
      <div className="forecast__day">{dtConvert(forecast.dt)}</div>
      <div className="forecast__icon">
        <img
          src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
          alt="current forecast icon"
        />
      </div>
      <div className="forecast__temp">{Math.round(forecast.main.temp)} ° C</div>
    </div>
  );
};
export default Forecast;
