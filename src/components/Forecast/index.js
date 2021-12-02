import React from "react";
import "./style.css";

const Forecast = (props) => {
    const { weather } = props;

    const days = {
        Mon: "Monday",
        Tue : "Tuesday",
        Wen : "Wednesday",
        Thu : "Thursday",
        Fri : "Friday",
        Sat : "Saturday",
        Sun : "Sunday"
      };    
      
      const months = {
        Jan : "Januar",
        Feb : "Februar",
        Mar : "March",
        Apr : "April",
        May : "May",
        Jun : "June",
        Jul : "July",
        Aug : "August",
        Sep : "September",
        Oct : "October",
        Nov : "November",
        Dec : "December",
      };

      const daysMapper = (shortage) => {
        return days[shortage];
      }
    
      const monthsMapper = (shortage) => {
        return months[shortage];
      }

      console.log(weather);
      console.log(new Date(weather.dt).toString());

      const day = new Date(weather.dt).toString().substring(0,3).trim();
      const month = new Date(weather.dt).toString().substring(7,3).trim();

    return (
        
        <div class="forecast">
            <div class="forecast__day">{daysMapper(day)}, {monthsMapper(month)}</div>
            <div class="forecast__temp">{Math.round(weather.main.temp)} °C</div>
            {weather ? 
            <div class="forecast__icon">
            <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="current weather icon"
                />
            </div>
            : null }
            <div className={weather?.main?.temp < 10 ? 'weather__current weather__current--cold' : 'weather__current'}> 
          </div>
        </div>
    );
};

export default Forecast;