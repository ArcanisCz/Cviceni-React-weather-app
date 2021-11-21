import React, { useState, useEffect } from "react";

// import weatherData from "./WeatherData";
import Weather from "./components/Weather";
import Loading from "./components/Loading";
import "./App.css";

const App = () => {
  
  const API_KEY = process.env.REACT_APP_MY_API_ID
  const API_BASE = 'http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=';
 
  // const [weather, setWeather] = useState(weatherData);
  const [weather, setWeather] =  useState(null);
  const [city, setCity] =  useState("Sydney");
  
  const fetchWeather = () => {
    fetch(
      API_BASE + API_KEY + '&q=' + city
    )
      .then((response) => response.json())
      .then((json) => {
        setWeather(json);
        });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchWeather, [city]);
  
  const handleButtonClick = (event) => {
    setCity(event.target.outerText);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="weather">

          <div className="button-group">
            <button className="button" onClick={handleButtonClick}>Prague</button>
            <button className="button" onClick={handleButtonClick}>London</button>
            <button className="button" onClick={handleButtonClick}>Tenerife</button>
          </div> 

          {weather ? <Weather weather={weather} /> : <Loading />}

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
