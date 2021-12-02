import React, {useState, useEffect} from "react";
import "./style.css";

const API_ID = process.env.REACT_APP_MY_API_ID;
const URL  = `https://api.openweathermap.org/data/2.5/weather?appid=${API_ID}`;

const WeatherCurrent = (props) => {
    const { city } = props;

    const [weather, setWeather] = useState(null);

    useEffect(
        () => {
        fetch(URL + '&q='+ city.toString() + '&units=metric')
        .then(response => response.json())
        .then(data => {
            setWeather(data);
        })
        },
        [city]
    )

    let dateSunrise = new Date(weather?.sys?.sunrise * 1000);
    let dateSunriseHours = "";
    if(dateSunrise.getHours() < 10) 
    {
      dateSunriseHours = "0" + dateSunrise.getHours() + ":";
      if(dateSunrise.getMinutes() < 10)
      {
        dateSunriseHours = dateSunriseHours + "0" + dateSunrise.getMinutes();
      }
      else 
      {
        dateSunriseHours = dateSunriseHours + dateSunrise.getMinutes();
      }
    }
    else {
      dateSunriseHours = dateSunrise.getHours() + ":";
      if(dateSunrise.getMinutes() < 10)
      {
        dateSunriseHours = dateSunriseHours + "0" + dateSunrise.getMinutes();
      }
      else 
      {
        dateSunriseHours = dateSunrise.getHours() + ":" + dateSunrise.getMinutes();
      }
    }

    let dateSunset = new Date(weather?.sys?.sunset * 1000);
    let dateSunsetHours = "";
    if(dateSunset.getHours() < 10) 
    {
      dateSunsetHours = "0" + dateSunset.getHours() + ":";
      if(dateSunset.getMinutes() < 10)
      {
        dateSunsetHours = dateSunsetHours + "0" + dateSunset.getMinutes();
      }
      else 
      {
        dateSunsetHours = dateSunsetHours + dateSunset.getMinutes();
      }
    }
    else {
      dateSunsetHours = dateSunset.getHours() + ":";
      if(dateSunset.getMinutes() < 10)
      {
        
        dateSunsetHours = dateSunsetHours + "0" + dateSunset.getMinutes();
      }
      else
      {
        dateSunsetHours = dateSunset.getHours() + ":" + dateSunset.getMinutes();
      }
    }

    return (
        <div className={weather?.main?.temp < 10 ? 'weather__current weather__current--cold' : 'weather__current'}> 
            <h2 className="weather__city" id="mesto">
              {
                weather ? <p>{weather?.name}</p> : null
              }
            </h2>
            <div className="weather__inner weather__inner--center">
              <div className="weather__section weather__section--temp">
              {
                weather ? 
                <span className="weather__temp-value" id="teplota">
                  
                  {Math.round(weather?.main?.temp)} 
               
                </span> : null
              }
                <span className="weather__temp-unit">°C</span>
                {/* weather ?
                <div className="weather__description" id="popis">
                 {weather?.weather[0]?.main} 
                </div> : null */}
              </div>
              <div
                className="weather__section weather__section--icon"
                id="ikona"
              >
                {/* weather ? <img src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`} alt={weather.weather[0].main} /> : null */}
              </div>
            </div>
            <div className="weather__inner">
              <div className="weather__section">
                <h3 className="weather__title">Wind</h3>
                <div className="weather__value">
                  { weather ?
                  <span id="wind">
                    {weather?.wind?.speed} 
                  </span> : null
                  } km/h
                </div>
              </div>
              <div className="weather__section">
                <h3 className="weather__title">Humidity</h3>
                <div className="weather__value">
                  { weather ?
                  <span id="humidity">
                    {weather?.main?.humidity}
                  </span> : null
                  } %
                </div>
              </div>
            </div>
            <div className="weather__inner">
              <div className="weather__section">
                <h3 className="weather__title">Sunrise</h3>
                <div className="weather__value">
                  { weather ?
                  <span id="sunrise">
                      {dateSunriseHours}
                  </span> : null
                  }
                </div>
              </div>
              <div className="weather__section">
                <h3 className="weather__title">Sunset</h3>
                <div className="weather__value">
                  { weather ?
                  <span id="sunset">
                      {dateSunsetHours}
                  </span> : null
                  }
                </div>
              </div>
            </div>
          </div>
    );
};

export default WeatherCurrent;