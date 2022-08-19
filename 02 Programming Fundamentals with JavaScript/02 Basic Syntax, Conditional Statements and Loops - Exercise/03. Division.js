function solve(number) {
    let maxDivision = 0
    if (number % 2 == 0) {
        maxDivision = 2
    }
    if (number % 3 == 0) {
        maxDivision = 3
    }
    if (number % 6 == 0) {
        maxDivision = 6
    }
    if (number % 7 == 0) {
        maxDivision = 7
    }
    if (number % 10 == 0) {
        maxDivision = 10
    }
    if (maxDivision != 0) {
        console.log(`The number is divisible by ${maxDivision}`)
    } else {
        console.log('Not divisible')
    }
}