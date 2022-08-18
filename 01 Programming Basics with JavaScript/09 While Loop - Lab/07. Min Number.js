function solve(input) {
    let minNumber = 0
    let i = 0
    let number = Number(input[i])
    minNumber = number
    i++
    while (input[i] != 'Stop') {
        number = Number(input[i])
        if (number < minNumber) {
            minNumber = number
        }
        i++
    }
    console.log(minNumber)
}