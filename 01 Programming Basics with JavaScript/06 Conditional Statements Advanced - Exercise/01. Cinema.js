function solve(input) {
    let type = input[0]
    let rows = Number(input[1])
    let columns = Number(input[2])
    let seats = rows * columns
    let income = 0
    if (type == 'Premiere') {
        income = 12 * seats
    } else if (type == 'Normal') {
        income = 7.50 * seats
    } else if (type == 'Discount') {
        income = 5 * seats
    }
    console.log(`${income.toFixed(2)} leva`)
}