const weekDays = {
    "Mo": "Monday",
    "Tu": "Tuesday",
    "We": "Wednesday",
    "Th": "Thursday",
    "Fr": "Friday",
    "Sa": "Saturday",
    "Su": "Sunday"
};

const romanianWeekDays = {
    "Monday": "Luni",
    "Tuesday": "Marți",
    "Wednesday": "Miercuri",
    "Thursday": "Joi",
    "Friday": "Vineri",
    "Saturday": "Sâmbătă",
    "Sunday": "Duminică"
};

function translate(days) {
    return Object.keys(days).reduce((translated, key) => {
        translated[key] = romanianWeekDays[days[key]];
        return translated;
    }, {});
}

const translatedWeekDays = translate(weekDays);
console.log(translatedWeekDays);
