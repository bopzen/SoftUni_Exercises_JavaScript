function solve(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    minutes = minutes + 15
    if (minutes >= 60) {
        minutes -= 60
        if (hours == 23) {
            hours = 0
        } else {
            hours += 1
        }
    }
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`)    
    } else {
        console.log(`${hours}:${minutes}`)
    }
}
