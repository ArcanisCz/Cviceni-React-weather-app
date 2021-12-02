import React from "react";

import './style.css';

import { formatDate } from  '../../utils'

const WeatherForecastItem = ({forecastitem}) => {
    return (
        <div className="forecast">
            <div className="forecast__day">{formatDate(forecastitem.dt)}</div>
            <div className="forecast__icon">
            {<img
                src={`http://openweathermap.org/img/wn/${forecastitem.weather[0].icon}@2x.png`}
                style={{ height: "100%" }}
                alt="current weather icon"
            /> }
            </div>
            <div className="forecast__temp">{Math.round(forecastitem.main.temp)} °C</div>
        </div>
    )
}

export default WeatherForecastItem;
