import React from 'react';
import './App.css';
import CurrentWeather from './currentWeather';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="weather">
          {/* <div className="button-group">
            <button className="button">City01</button>
            <button className="button">City02</button>
            <button className="button">City03</button>
          </div> */}

          <CurrentWeather />

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
        </div>
      </div>
    </div>
  );
};

export default App;
