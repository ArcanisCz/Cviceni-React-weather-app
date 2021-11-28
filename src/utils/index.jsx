
const convertedLocalTime = (time) => {
    const date = new Date(time * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formatedTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
    return formatedTime
}


const convertedDate = (dateStamp) => {
    const dateObject = new Date(dateStamp * 1000);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const formatedDate = days[(dateObject.getDay())] + ", " + (dateObject.getDate())+ " " + months[(dateObject.getMonth())];
    return formatedDate;
}
const forecastDashboard = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1)

const cities = [
    "Abuja",
    "Amsterdam",
    "Aswān",
    "Athens",
    "Bangkok",
    "Barcelona",
    "Belgrade",
    "Budapest",
    "Buenos Aires",
    "Cape Town",
    "Dakar",
    "Dublin,IE",
    "El Alto",
    "Hanoi",
    "Harbin",
    "Kingston",
    "Kuala Lumpur",
    "Kuwait",
    "Kyiv",
    "Lagos",
    "Ljubljana",
    "London",
    "Madrid",
    "Melbourne",
    "Miami",
    "Minsk",
    "Moscow",
    "New Delhi",
    "New York",
    "Norilsk",
    "Paris",
    "Porto",
    "Prague",
    "Puerto de la Cruz",
    "Reykjavik",
    "Seoul",
    "Skopje",
    "Sofia",
    "Split",
    "Sydney",
    "São Paulo",
    "Tallinn",
    "Tirana",
    "Toronto",
    "Vancouver",
    "Vienna",
    "Vilnius",
    "Warsaw",
    "Winnipeg",
    "Yakutsk",
  ];  

  export {convertedLocalTime,convertedDate, forecastDashboard, cities};