function calculateDaysBetweenDates(begin, end) {
    const date1 = new Date(begin);
    const date2 = new Date(end);
    const days = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
    return days;
}

const daysBetween = calculateDaysBetweenDates('2022-01-01', '2023-01-10');
console.log(daysBetween); // Outputs: 9