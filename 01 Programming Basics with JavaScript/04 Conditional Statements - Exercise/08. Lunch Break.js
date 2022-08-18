function solve(input) {
    let seriesName = input[0]
    let duration = Number(input[1])
    let breakTime = Number(input[2])
    let timeLeft = breakTime - breakTime /8 - breakTime / 4
    if (timeLeft >= duration) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft - duration)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(duration - timeLeft)} more minutes.`)
    }

}