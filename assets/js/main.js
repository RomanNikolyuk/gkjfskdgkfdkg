const dateObj = new Date();
const monthes = [
    'січня', 'лютого', 'березня', "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
];
const $date = document.querySelector('.date');

const date = {
    day: dateObj.getDate(),
    month: monthes[dateObj.getMonth()],
    year: dateObj.getFullYear(),
    hour: dateObj.getHours(),
    minute: dateObj.getMinutes()
};

$date.textContent = `${date.day} ${date.month} ${date.year}, ${date.hour}:${date.minute}`;