import React from "react";
import {getDay} from '../utils/helpers.js'


const Forecast = ({ data }) => {
    return (
        <div className="forecast">
            <div className="forecast__day">{getDay(data.dt)}</div>
            <div className="forecast__icon">
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                style={{ height: "100%" }}
                alt="forecast weather icon"
                />
            </div>
            <div className="forecast__temp">{Math.round(data.main.temp)} °C</div>
        </div>
    )
}

export default Forecast;