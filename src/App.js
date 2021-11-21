import React, { useState, useEffect } from "react";

// import weatherData from "./WeatherData";
import Weather from "./components/Weather";
import Loading from "./components/Loading";
import Forecast from "./components/Forecast";
import { filterForecast } from "./utils/helpers";
import "./App.css";

const App = () => {
  
  const API_KEY = process.env.REACT_APP_MY_API_ID
  const API_BASE_CURRENT = 'http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=';
  const API_BASE_FORECAST = 'http://api.openweathermap.org/data/2.5/forecast?units=metric&APPID=';
 
  // const [weather, setWeather] = useState(weatherData);
  const [weather, setWeather] =  useState(null);
  const [city, setCity] =  useState("Sydney");
  const [forecast, setForecast] = useState(null);
  
  const fetchWeather = () => {
    fetch(
      API_BASE_CURRENT + API_KEY + '&q=' + city
    )
      .then((response) => response.json())
      .then((json) => {
        setWeather(json);
        });
  };

  const fetchForecast = () => {
    fetch (
      API_BASE_FORECAST + API_KEY + '&q=' + city
    )
    .then((response) => response.json())
    .then((json) => {
      setForecast(filterForecast(json.list));
    });
  }


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchWeather, [city]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchForecast, [city]);
  
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
           {forecast ? forecast.map (item => <Forecast data={item} key={item.dt_txt}/>) : <Loading />} 
          </div>  
        </div>
      </div>
    </div>
  );
};

export default App;
