function solve(number) {
    let average = 0
    let sum = 0
    number = number.toString()
    for (let digit of number) {
        sum += Number(digit)
    }
    average = sum / number.length
    while (average < 5) {
        number += '9'
        sum += 9
        average = sum / number.length
    }
    console.log(number)
}