function solve(day) {
    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"               
    ]
    if (day >=1 && day <= days.length) {
        console.log(days[day-1])
    } else {
        console.log('Invalid day!')
    }
}