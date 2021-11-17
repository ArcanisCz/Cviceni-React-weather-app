import React from "react";

import'./style.css';

import WeatherForecastItem from "../WeatherForecastItem";

const WeatherForecast = ({forecast}) =>     
     <div className="weather__forecast" id="predpoved">
          {forecast.map(forecastitem => <WeatherForecastItem forecastitem={forecastitem} key={forecastitem.dt}/>)}
     </div>;

export default WeatherForecast;