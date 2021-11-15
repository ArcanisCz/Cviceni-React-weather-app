export const filterForecast = (array) => {
  return array.filter((_, index) => index % 8 === 0);
};
