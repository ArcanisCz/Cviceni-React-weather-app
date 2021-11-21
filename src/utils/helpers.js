import { days, months } from "./consts";

const getLocalTime = (timeUtc, timezone) => {
    let date = new Date(timeUtc * 1000) 
    let localHours = date.getHours() + date.getTimezoneOffset()/60 + timezone/3600;
    if (localHours < 0) {localHours = localHours + 24;}
    if (localHours > 23) {localHours = localHours - 24;}

    let localMinutes = date.getMinutes().toString().padStart(2, "0");
    return `${localHours}:${localMinutes}`;
  }

const filterForecast = (forecastAll) => {
    return forecastAll.filter((T, index) => index % 8 === 0);
}

const getDay = (timeUtc) => {
    let date = new Date (timeUtc * 1000)
    return `${days[date.getDay()-1]}, ${date.getDate()} ${months[date.getMonth()]}`
}

export {getLocalTime, filterForecast, getDay};