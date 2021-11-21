export const filterForecast = (array) => {
  return array.filter((_, index) => index % 8 === 0);
};

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

export const getTimeStamp = (unixTimeStamp) => {
  const hours = new Date(unixTimeStamp * 1000).getHours();
  const minutes = new Date(unixTimeStamp * 1000).getMinutes();
  const twoDigitMinutes = minutes.toString().padStart(2, '0');
  return `${hours}:${twoDigitMinutes}`;
};

export const getBackground = ({ weather }) => {
  if (weather?.main.temp < 10) {
    return 'weather__current weather__current--cold';
  } else return 'weather__current';
};

export const getDayForecast = (unix) => {
  const date = new Date(unix * 1000);
  return `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()} `;
};
