import React from 'react';
import './style.css';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const dtConvert = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const day = date.getDay();
  let forecastDay;
  for (let i = 0; i < days.length; i++) {
    if (day === i) {
      forecastDay = days[i];
    }
  }

  const month = date.getMonth();
  let forecastMonth;
  for (let i = 0; i < months.length; i++) {
    if (month === i) {
      forecastMonth = months[i];
    }
  }

  const dayNumber = date.getDate();

  const forecastDate = `${forecastDay}, ${dayNumber} ${forecastMonth}`;
  return forecastDate;
};

const Forecast = ({ forecast }) => {
  return (
    <div className="forecast">
      <div className="forecast__day">{dtConvert(forecast.dt)}</div>
      <div className="forecast__icon">
        <img
          src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
          alt="current forecast icon"
        />
      </div>
      <div className="forecast__temp">{Math.round(forecast.main.temp)} ° C</div>
    </div>
  );
};
export default Forecast;
