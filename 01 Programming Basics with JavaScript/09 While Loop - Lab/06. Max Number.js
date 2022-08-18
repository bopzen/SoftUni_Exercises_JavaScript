function solve(input) {
    let maxNumber = 0
    let i = 0
    let number = Number(input[i])
    maxNumber = number
    i++
    while (input[i] != 'Stop') {
        number = Number(input[i])
        if (number > maxNumber) {
            maxNumber = number
        }
        i++
    }
    console.log(maxNumber)
}