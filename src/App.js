import React, {useState, useEffect} from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import WeatherCurrent from './components/WeatherCurrent';

const API_ID = process.env.REACT_APP_MY_API_ID;

const URLForecast = `https://api.openweathermap.org/data/2.5/forecast?`;

const App = (props) => {
  const [city, setCity] = useState('Brno');
  const [forecast, setForecast] = useState(null);

  const handleButtonClick = (city) => {
    setCity(city);
  }

  const sortData = (data, sortInt) => {
    let sortedData = [];
    for(let i = 0; i<= data.length - 1; i++)
    {
      let divided = i + 1;

      if((divided % sortInt) === 0)
      {
        sortedData.push(data[i]);
      }
    }

    return sortedData;
  }

  useEffect(
      () => {
      fetch(URLForecast + '&q='+ city.toString() + '&units=metric&appid=' + API_ID)
        .then(response => response.json())
        .then(data => {
            setForecast(sortData(data.list, 8));
        })
        },
      [city]
    )

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="weather">
          { <div className="button-group">
            <button onClick={() => handleButtonClick('Prague')} className="button">Prague</button>
            <button onClick={() => handleButtonClick('Bratislava')} className="button">Bratislava</button>
            <button onClick={() => handleButtonClick('Berlin')} className="button">Berlin</button>
          </div> }
          
          <WeatherCurrent city={city} />

          <div class="weather__forecast" id="predpoved">
                {
                  forecast?.map(o => <Forecast weather={o}/>)
                  /* <img
                    src={URL FROM OPEN WEATHER}
                    style={{ height: "100%" }}
                    alt="current weather icon"
                  /> */
                }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
