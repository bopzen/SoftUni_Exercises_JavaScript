function solve(number1, number2) {
    let factorial1 = 1
    let factorial2 = 1
    for (let i = 1; i <= number1; i++) {
        factorial1 *= i
    }
    for (let i = 1; i <= number2; i++) {
        factorial2 *= i
    }
    let division = factorial1 / factorial2
    console.log(division.toFixed(2))
}