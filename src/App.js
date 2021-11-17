import React, {useEffect, useState} from "react";
import "./App.css";

import WeatherCurrent from "./components/WeatherCurrent";
import WeatherForecast from "./components/WeatherForecast";

import { arrayFilter } from "./utils";

const App = () => {

  const API_KEY = process.env.REACT_APP_MY_API_ID;
  const [city, setCity] = useState('Prague');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  
  const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${city}&units=metric`)
    .then((response) => response.json())
    .then(json => {
        setWeather(json);
    })  
  }

  const fetchForecast = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${city}&units=metric`)
    .then((response) => response.json())
    .then(json => {   
      console.log(json.city.name);
      console.log(arrayFilter(json.list, 8));   
      setForecast(arrayFilter(json.list, 8));
    })  
  }

  useEffect(() => {
      fetchWeather();
      fetchForecast();
    }, 
  [city]);

  const handleButtonClick = (cityName) => {
    setCity(cityName)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="button-group">
              <button className="button" onClick={() => handleButtonClick('Prague')}>Prague</button>
              <button className="button" onClick={() => handleButtonClick('Reykjavik')}>Reykjavik</button>
              <button className="button" onClick={() => handleButtonClick('Tenerife')}>Tenerife</button>
        </div> 
        <div className="weather">
          {
            (weather !== null) && (weather !==undefined) ? (
            <WeatherCurrent weather= {weather}/>
            ) : <></>
          }
          { 
            (forecast !== null) && (forecast !==undefined) ? (
              <WeatherForecast forecast={forecast} />
            ) : <></>
          }    
        </div>
      </div>
    </div>
  );
};

export default App;
