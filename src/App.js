import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Weather from './components/Weather';

const App = () => {
        const [weather, setWeather] = useState(null);
        const [forecast, setForcast] = useState(null);
        const [city, setCity] = useState('Prague');
        const api_id = process.env.REACT_APP_MY_API_ID;

        const fetchWeather = (city) => {
            /* fetch(
              'https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=' + api_id,) */
            fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_id}`,
                )
                .then((response) => response.json())
                .then((data) => {
                    setWeather(data);
                    console.log({ weather });
                });
        };
        //console.log(process.env);

        const fetchForecast = (city) => {
            fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${api_id}`,
                )
                .then((response) => response.json())
                .then((data) => {
                    // setForcast(forcastData(data));
                    setForcast(data.list.filter((element, index) => index % 8 === 0));
                    console.log({ forecast });
                });
        };

        useEffect(() => {
            fetchWeather(city);
            fetchForecast(city);
        }, [city]);

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

        return ( <
            div className = "App" >
            <
            div className = "container" >
            <
            h1 > My Weather App < /h1> <
            div className = "weather" >
            <
            div className = "button-group" >
            <
            button className = "button"
            onClick = {
                () => {
                    setCity('Prague');
                }
            } >
            Prague <
            /button> <
            button className = "button"
            onClick = {
                () => {
                    setCity('London,uk');
                }
            } >
            London <
            /button> <
            button className = "button"
            onClick = {
                () => {
                    setCity('Reykjavik');
                }
            } >
            Reykjavik <
            /button> <
            /div> {
                weather !== null || undefined ? < Weather weather = { weather }
                /> : null} <
                div className = "weather__forecast"
                id = "predpoved" >
                    <
                    div className = "forecast" >
                    <
                    div className = "forecast__day" > { /* Day, date */ } { /*  {forecast[0].dt} */ } { dtConvert(forecast[0].dt) } <
                    /div> <
                    div className = "forecast__icon" >
                    <
                    img
                src = { `http://openweathermap.org/img/wn/${forecast[0].weather[0].icon}@2x.png` }
                alt = "current forecast icon" /
                    > {
                        /* <img src={URL FROM OPEN WEATHER}
                                            style={{ height: "100%" }}
                                            alt="current weather icon"
                                        /> */
                    } <
                    /div> <
                    div className = "forecast__temp" > { /* -- */ } { Math.round(forecast[0].main.temp) }°
                C
                    <
                    /div> <
                    /div> <
                    /div> <
                    /div> <
                    /div> <
                    /div>
            );
        };

        export default App;