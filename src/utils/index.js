export const formatTime = (date) => {
  const dateObject = new Date(date * 1000);
  return (
    dateObject.getHours()+':'+('0'+dateObject.getMinutes()).slice(-2)
  )
}

export const formatDate = (date) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  const dateObject = new Date(date * 1000);
  return (
    weekday[dateObject.getDay()]+', '+dateObject.getDate()+' '+month[dateObject.getMonth()]
  )
}

export const arrayFilter = (array, nth) => array.filter((item, index) => index % nth === nth - 1);
//item se někdy nahrazuje pouze podtržítkem, pokud se nepoužívá.
