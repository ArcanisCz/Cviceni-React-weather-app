const getLocalTime = (timeUtc, timezone) => {
    let date = new Date((timeUtc) * 1000) 
    let localHours = date.getHours() + date.getTimezoneOffset()/60 + timezone/3600;
    if (localHours < 0) {localHours = localHours + 24;}
    if (localHours > 23) {localHours = localHours - 24;}

    let localMinutes = date.getMinutes().toString().padStart(2, "0");
    return `${localHours}:${localMinutes}`;
  }

export {getLocalTime};