import React from 'react';

const WeatherForecast = () => (
  <div className="weather__forecast" id="predpoved">
    <div className="forecast">
      <div className="forecast__day">Day, date</div>
      <div className="forecast__icon">
        {/* <img
                  src={URL FROM OPEN WEATHER}
                  style={{ height: "100%" }}
                  alt="current weather icon"
                /> */}
      </div>
      <div className="forecast__temp">-- °C</div>
    </div>
  </div>
);

export default WeatherForecast;
