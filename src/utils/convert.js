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
export const dtConvert = (timestamp) => {
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

export const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();
    const seconds = '0' + date.getSeconds();
    const formattedTime =
        hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
};