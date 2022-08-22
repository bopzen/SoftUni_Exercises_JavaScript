function solve(number) {
    number = number.toString()
    let sum = 0
    for (let digit of number) {
        sum += Number(digit)
    }
    console.log(sum)
}